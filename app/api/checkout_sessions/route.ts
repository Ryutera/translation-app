import { stripe } from "@/lib/stripe";
import getUserId from "@/lib/supabase/getUserId";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const {selectedPlan} = await req.json()
    const plan = selectedPlan as "annual" | "monthly";
 const PRICE_ID =
  plan === "annual"
    ? process.env.STRIPE_PRICE_ANNUAL!
    : process.env.STRIPE_PRICE_MONTHLY!;
  
try{
   const userId = await getUserId()
   if (!userId){throw new Error}
      const headersList = await headers();
    const origin = headersList.get("origin");
const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          
          price:  PRICE_ID,
          quantity: 1,
        },
        
      ],
       metadata:{
        userId:userId
      },
      mode: 'subscription',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
       cancel_url: `${origin}/cancel`
    });
  
     return NextResponse.json({ url: session.url });
  } catch (err:any) {
    return NextResponse.json(
      { error: err?.message  },
      { status: err?.statusCode || 500 }
    )
  }
}