
"use client"
import { getTranslationHistory } from "@/app/action"
import TranslationDeleteButton from "./TranslationDeleteButton"
import TranslationHistoryNavigation from "./TranslationHistoryNavigation"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

interface Props {
  userId?: string | undefined
}

const TranslationHistory =  ({ userId }: Props) => {
  const [translations, setTranslations ]= useState<any[]>([])
 useEffect(()=>{
  const supabase = createClient()

  
  supabase.auth.onAuthStateChange((event, session) => {
if  (event === 'SIGNED_IN') {

  const getData = async()=>{
 const data = await getTranslationHistory(userId!)
  setTranslations(data)
  }
getData()
 
}else if (event === 'SIGNED_OUT') {
  setTranslations([])
}

  })

 },[])


  return (
   <div className="flex flex-col h-[80%] overflow-y-scroll gap-3  mt-12">
  {translations.map((translation) => (
    <div
      key={translation.id}
      className="flex w-full justify-between h-10 px-10 items-center hover:bg-gray-50"
    >
     <TranslationHistoryNavigation text={translation.sourceText} id={translation.id}/>

      <TranslationDeleteButton id={translation.id} />
    </div>
  ))}
</div>
  )
}


export default TranslationHistory