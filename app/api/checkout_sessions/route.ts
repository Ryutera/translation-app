import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req:any,res:any){
    const {selectedPlan} = await req.json()
    const plan = selectedPlan as "anual" | "monthly";
   const PRICE_ID = plan==="anual"? "price_1SalmBR1aFV3l4B31HExSSLH":  "price_1SalloR1aFV3l4B35KUWcWMy"
try{
      const headersList = await headers();
    const origin = headersList.get("origin");
const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          
          price:  PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
       cancel_url: `${origin}/cancel`
    });
    // return NextResponse.redirect(session.url!, 303)
     return NextResponse.json({ url: session.url });
  } catch (err:any) {
    return NextResponse.json(
      { error: err?.message  },
      { status: err?.statusCode || 500 }
    )
  }
}