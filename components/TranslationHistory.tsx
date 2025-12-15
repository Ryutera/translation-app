

import { getTranslationHistory } from "@/app/action"
import TranslationDeleteButton from "./TranslationDeleteButton"
import TranslationHistoryNavigation from "./TranslationHistoryNavigation"


const TranslationHistory = async() => {
let translations
try {
   const res = await getTranslationHistory()
　translations = res?.data
} catch (error) {
  console.error(error)
}


  return (
      <>
      {translations
        ?
        <div className="flex flex-col sm::h-[60%] h-[55%] gap-5 overflow-y-scroll  my-10">
          {translations?.map((translation:any) => (
            <div
              key={translation.id}
              className="flex w-full justify-between  h-10 px-10 items-center hover:bg-gray-50"
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

</>

  )
}


export default TranslationHistory