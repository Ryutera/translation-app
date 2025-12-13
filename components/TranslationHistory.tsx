
"use client"
import { getTranslationHistory } from "@/app/action"
import TranslationDeleteButton from "./TranslationDeleteButton"
import TranslationHistoryNavigation from "./TranslationHistoryNavigation"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"


interface Props {
  userId?: string | undefined
}

const TranslationHistory = ({ userId }: Props) => {
  const [translations, setTranslations] = useState<any[]>([])
  
  
  let data
  useEffect(()=>{

    const init = async()=>{
const supabase = createClient()
 data = await supabase.auth.getSession()
 console.log(data,"データ")
    }

  },[])

  return (
    <div className="h-full ">
      {data
        ?
        <div className="flex flex-col h-[80%] overflow-y-scroll gap-3  mt-12">
          {translations.map((translation) => (
            <div
              key={translation.id}
              className="flex w-full justify-between h-10 px-10 items-center hover:bg-gray-50"
            >
              <TranslationHistoryNavigation text={translation.sourceText} id={translation.id} />

              <TranslationDeleteButton id={translation.id} />
            </div>
          ))}
        </div>
        :
        <div className="flex flex-col items-center justify-center h-[80%] mt-10 px-6 text-center">
          ログインするとここから翻訳履歴にアクセスできます
        </div>}

    </div>

  )
}


export default TranslationHistory