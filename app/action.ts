"use server";

import prisma from "@/lib/prisma"



export async function addUserData (userId:string){
    if (!userId) {
        console.log("エラー")
        return 
    }
    await prisma.user.create({
        data:{
            authUserId:userId
        }
    })

}