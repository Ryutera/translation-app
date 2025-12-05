"use server";

import OpenAI from "openai";

export const generateTranslation = async(input:string,lang:string)=>{
 
const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4.1",
    instructions:` 
   You are a translation assistant for learners of Japanese who struggle with real-life casual speech (anime, movies, conversations).

For every input text, do the following:

1. Detect the user's main language from the input.  
2. Always output *casual natural Japanese* at the level of talking to a close friend of similar age
   - Not textbook-style
   - Not rude slang
   - No keigo, unless the input clearly needs it

3. Then give a **short explanation** in ${lang}.  
   - Focus only on useful points: nuance, casual expressions, contractions, and word choices.
   - Do NOT add cultural essays or long background info.

Always follow this exact format:

Translation (Japanese):
[自然でカジュアルな日本語訳]

Meaning:
[ユーザーの言語でのシンプルな意味]

Explanation:
[重要な語彙や文法・ニュアンスのポイントを2〜4文で説明]

Rules:
- Keep the format and headings exactly the same for every answer.
- Keep the explanation short and practical.
- Do not add romaji or furigana unless the user explicitly asks.
- Do not add any extra sections, notes, or greetings.
    `,
    temperature: 0.1,
    input: input
});



console.log(response);
const data = JSON.stringify(response)
return data



}