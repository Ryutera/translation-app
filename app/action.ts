"use server";

import prisma from "@/lib/prisma";
import getUserId from "@/lib/supabase/getUserId";
import OpenAI from "openai";

export const generateTranslation = async(input:string)=>{
 
const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4.1",
    instructions:` 
You are a translation assistant for learners of Japanese.

For each input:
1. Detect the user's main language from the input.
2. Create a natural casual Japanese translation (友達同士の会話レベル).
3. MeaningUserLang and every item in Notes must be written in the user's main language (detectedLang).

Return ONLY a JSON object with this exact shape:

- When the input is valid:
{
  "status": "ok",
  "detectedLang": "<language code like 'ja' or 'en'>",
  "translationJa": "<casual Japanese translation>",
  "meaningUserLang": "<simple meaning in the user's language>",
  "notes": [
    "<short note about nuance or vocabulary>",
    "<another short note>"
  ]
}

- When you cannot reasonably understand the input (random letters, no clear language, etc.):
{
  "status": "invalid_input",
  "detectedLang": null or "<best guess>",
  "messageUserLang": "<short message in the user's language saying you could not understand the input>"
}

Rules:
- Always return valid JSON. No extra text before or after.
- Keep all texts short and practical.
- notes should have 1-3 items. Each item is one short sentence.

    `,
    temperature: 0.3,
    input: input
});



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