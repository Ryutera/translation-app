
"use client"
import { useEffect, useState } from "react"
import TranslationDeleteButton from "./TranslationDeleteButton"
import TranslationHistoryNavigation from "./TranslationHistoryNavigation"
import { useAuthStore } from "@/lib/store/useAuthStore"
import { getTranslationHistory } from "@/app/action"




const TranslationHistory = () => {
  const user = useAuthStore((state) => state.user)
  const [translations, setTranslations] = useState<any[]>([])

  useEffect(() => {
    const init = async () => {

      try {
        const res = await getTranslationHistory()


        if (res.error) {
          console.log(res.error)
        } else if (res.data) {
          setTranslations(res.data)
        }


      } catch (error) {
        console.error(error)
      }
    }
    init()
  }, [])

  return (
    <div className="h-full ">
      {user
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