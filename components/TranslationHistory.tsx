
import { getTranslationHistory } from "@/app/action"

interface Props{
    userId?:string|undefined
}

const TranslationHistory = async({userId}:Props) => {
    const translations = await getTranslationHistory(userId!)
   
  return (
    <div className="flex flex-col  overflow-scroll gap-3 justify-center mt-12">
      {translations.map((translation)=>(
     <div key={translation.id} className="flex w-full h-10  pl-10 hover:bg-gray-50 hover:cursor-pointer items-center ">
     {translation.sourceText}
     </div>

      ))}
    </div>
  )
}

export default TranslationHistory
