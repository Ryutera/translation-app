"use client"

import { deleteTranslationHistory } from "@/app/action"
import { useRouter } from "next/navigation"


 const TranslationDeleteButton  = ({id}:{id:string})=>{
    const router = useRouter()
    const handleDelete = async()=>{
        const confirm = window.confirm("Are you to delete it?")
    

        if (confirm) {
            await deleteTranslationHistory(id)
            router.refresh()
        }
    }
  
  return (<button className="z-10 h-full  px-3" onClick={handleDelete}>...</button>)
}

export default TranslationDeleteButton 