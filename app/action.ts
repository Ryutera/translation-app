"use server";

import prisma from "@/lib/prisma";
import getUserId from "@/lib/supabase/getUserId";
import OpenAI from "openai";

export const generateTranslation = async(input:string)=>{
 
const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4.1",
    instructions:` 

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

console.log(response)

//ログイン時には翻訳結果をデータベースに追加
const userId = await getUserId()

if (userId) {
    try{
  await prisma.translation.create({
        data:{
           
            userId:userId,
            sourceText:input,
            output:response.output_text,
           
        }
    })
    }catch(err){
        console.log(err)
    }  
}


return response.output_text
}

//(アカウントがない場合に)ユーザー登録
export async function createUser (id:string){
   
  const hasAccount =  await prisma.user.findUnique({
        where:{
            authUserId:id
        }
    })
    hasAccount || await prisma.user.create({
    data:{
        authUserId:id
    }
})

}


//ログインユーザーが24時間以内に利用した回数
export async function checkQuotaToday(userId: string){
const since = new Date(Date.now() -24 * 60 *60 * 1000 )
const used = await prisma.translation.count({
    where:{
        userId:userId,
        createdAt:{
            gte:since
        }
    }
})

return used
    
}


export async function getTranslationHistory(userId:string){
   
    const translations = await prisma.translation.findMany({
        where:{
            userId:userId
        }
    }
    )

    return translations
}