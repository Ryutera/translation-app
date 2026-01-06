"use server";

import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import getUserId from "@/lib/supabase/getUserId";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import OpenAI from "openai";

export const generateTranslation = async (input: string) => {

    const openai = new OpenAI();

      const userId = await getUserId()

      //ログイン状態であり、かつ利用制限に達した場合は翻訳を実行しない
      if (userId) {
         const res = await checkQuotaToday()
        //  restがnullつまりcheckquotaで残りが0の場合はreturn
         if (res?.status==="limit_reached") {
            return JSON.stringify({ status: "limit_reached" })
         }
      }
     

    const response = await openai.responses.create({
        model: "gpt-4.1",
        instructions: ` 

 You serve the role of converting input words into casual Japanese expressions for Japanese language learners.

Your job:
- Always translate INTO JAPANESE.
- The user's main language is the language of the input (detectedLang).
- Output must ALWAYS be JSON with the exact fields below.

Field rules (VERY IMPORTANT):

1) "translationJa"
- MUST be in natural, casual Japanese only.
- Target: friend-level spoken Japanese.
- Do NOT use any other language here.

2) "meaningUserLang"
- Short meaning in detectedLang (user's language).
- No Japanese sentences here. You may include Japanese words only in quotes if needed.

3) "notes"
- Array of 1–3 short sentences in detectedLang.
- Each item is one short sentence.
- You may mention Japanese words in quotes (e.g. "まだ", "〜中だよ") while explaining.

If the input is valid and you can understand it, return:

{
  "status": "ok",
  "detectedLang": "<lang code like 'ko' or 'en'>",
  "translationJa": "<casual Japanese>",
  "meaningUserLang": "<meaning in user's language>",
  "notes": ["<note1>", "<note2>"]
}

If the input is nonsense or you cannot understand it:

{
  "status": "invalid_input",
  "detectedLang": null or "<best guess>",
  "messageUserLang": "<short message in user's language>"
}

Always return ONLY valid JSON. No text before or after.


    `,
        temperature: 0.1,
        input: input
    });



    //ログイン時には翻訳結果をデータベースに追加
  

    if (userId) {
        try {
            await prisma.translation.create({
                data: {

                    userId: userId,
                    sourceText: input,
                    output: response.output_text,

                }
            })
        } catch (err) {
            console.log(err)
        }
    }


    return response.output_text
}

//(アカウントがない場合に)ユーザーをdbに追加
export async function createUser(id: string) {

    const hasAccount = await prisma.user.findUnique({
        where: {
            authUserId: id
        }
    })
    hasAccount || await prisma.user.create({
        data: {
            authUserId: id
        }
    })

    revalidatePath("/")

}


//ログインユーザーが24時間以内に利用した回数
export async function checkQuotaToday() {
    const userId = await getUserId()
    if (!userId) {
        return 
    }
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000)
    const used = await prisma.translation.count({
        where: {
            userId: userId,
            createdAt: {
                gte: since
            }
        }
    })

    const remaining = 10 - used 

    
    if (remaining > 0) {
        return { status: "ok", remaining }
    }else{
       return {status: "limit_reached", remaining: 0 }
    }

    

}


export async function getTranslationHistory(userId:string) {


    if (!userId) return

        try {
             const translations = await prisma.translation.findMany({
        where: {
            userId: userId,
            isHidden: false
        }})

        return { data: translations }
        } catch (error) {
            console.error("Database Error in getTranslationHistory:")
            return { data: null, error: "Failed to fetch translation history." }
        }

}


export async function deleteTranslationHistory(id: string) {
    try {
        await prisma.translation.update({
            where: {id: id},
            data:{ isHidden: true }})
           
            return { success: true }
    } catch (error) {
            console.error(error)
            return { success: false }
    }

}





//課金ユーザーかどうかの判定

export async function checkPlan() {
    const userId = await getUserId()
    if (!userId) return

    const user = await prisma.user.findFirst({
        where: {
            authUserId: userId
        }
    })

    if (!user) return 

   return   {planName:user.plan, proUntil:user.proUntil}


}




export async function getUserWithId(userId: string) {

    const userData = await prisma.user.findUnique({
        where: {
            authUserId: userId
        }
    })

    return userData
}





export async function deleteAccount() {

    const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE!, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    })

     const userId = await getUserId()
    if (!userId) {
         return { data: null, error: "Authentication required." }
    }

    try {

        const { error: authError } = await supabase.auth.admin.deleteUser(userId)
        if (authError) { throw new Error(`Auth delete failed: ${authError.message}`) }

        await prisma.user.delete({
            where: {
                authUserId: userId
            }
        })
       
        revalidatePath("/")
        return { success: true }

    } catch (error) {
        console.error("deleteAccount failed", {
            userId,
            error,
        })

        return { success: false }
    }

}




export async function cancelSubscription(){
    const userId = await  getUserId()
    const user = await prisma.user.findUnique({
        where:{
            authUserId:userId
        }
    })

    const stripeId = user?.stripeCustomerId
    const res = await stripe.subscriptions.list({
        customer:stripeId!
    })


    const sub = res.data[0]
    const subId = sub.id

    if (sub.cancel_at_period_end) {
        return { 
            success: true, 
            alreadyCancelled: true, 
            message: "Subscription is already scheduled for cancellation." 
        }
    }



    //即時キャンセルではなくキャンセルの期限になったら終了
   const subscription = await stripe.subscriptions.update(`${subId}`,{
    cancel_at_period_end:true
   });

   return { 
        success: true, 
        alreadyCancelled: false, 
        subscription 
    }
   

}