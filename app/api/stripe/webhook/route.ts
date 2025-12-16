

import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let event
  const body = await req.text();
  const signature = req.headers.get("stripe-signature")!;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );
  } catch (err) {
    console.error("Webhook signature verification failed", err);
    return new NextResponse("Webhook Error", { status: 400 });
  }


  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any; // Stripe.Checkout.Session

    const subscriptionId = session.subscription as string;
    const customerId = session.customer as string;

    const subscription: any = await stripe.subscriptions.retrieve(subscriptionId);


    const item = subscription.items.data[0];
    const endAt = item.current_period_end;
    const plan = item.price.recurring.interval


    const userId = session.metadata.userId


    //課金ユーザー用のデータを追加
    await prisma.user.update({
      where: {
        authUserId: userId
      }, data: {
        stripeCustomerId: customerId,
        subscriptionId:subscriptionId,
        plan: plan,
        proUntil: new Date(endAt * 1000)

      }
    })


  }

  //予約されたサブスク終了日に処理される
  if(event.type==="customer.subscription.deleted"){
    const session = event.data.object as any; 
    const subscriptionId = session.id
  
    const user = await prisma.user.findFirst({
      where:{
        subscriptionId:subscriptionId
      }
    })

    if (!user) {console.log("User not found for subscription:", subscriptionId)
      return
    }

    const userId = user.authUserId

    await prisma.user.update({
        where:{
          authUserId:userId
         },data:{
          subscriptionId:null,
          proUntil:null,
          plan:"FREE"
        }
    })

  }

  return new NextResponse("OK", { status: 200 });
}
