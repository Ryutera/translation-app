

import { getTranslationHistory } from "@/app/action"
import TranslationDeleteButton from "./TranslationDeleteButton"
import TranslationHistoryNavigation from "./TranslationHistoryNavigation"


const TranslationHistory = async() => {
let translations
try {
   const res = await getTranslationHistory()
   if (res.data===null) {
    console.log(res.error)
   }
　translations = res.data
 console.log(translations)
} catch (error) {
  console.error(error)
}


  return (
    <div className="h-full ">
      {translations
        ?
        <div className="flex flex-col h-[80%] overflow-y-scroll gap-3  mt-12">
          {translations?.map((translation:any) => (
            <div
              key={translation.id}
              className="flex w-full justify-between h-10 px-10 items-center hover:bg-gray-50"
            >
              <TranslationHistoryNavigation text={translation.sourceText} id={translation.id} />

              <TranslationDeleteButton id={translation.id}/>
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