

import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST (req:Request){
    let event 
    const signature = req.headers.get("stripe-signature")!;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

    try {
      event = stripe.webhooks.constructEvent(
        req.body as any,
        signature,
        webhookSecret
      );
    } catch (err) {
    console.error("Webhook signature verification failed", err);
    return new NextResponse("Webhook Error", { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
        console.log("hello")
    }
}
