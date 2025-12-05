"use server";

import prisma from "@/lib/prisma"
import OpenAI from "openai";

export const generateTranslation = async(input:string)=>{
 
const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4.1",
    input: input
});

console.log(response);
const data = JSON.stringify(response)
return data
}