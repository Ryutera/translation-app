
import { getTranslationHistory } from "@/app/action"
import Link from "next/link"

interface Props{
    userId?:string|undefined
}

const TranslationHistory = async({userId}:Props) => {
    const translations = await getTranslationHistory(userId!)
   
  return (
    <div className="flex flex-col  h-[80%] overflow-y-scroll gap-3 justify-center mt-12  ">
      {translations.map((translation)=>(
        <Link  href={`/translation/${translation.id}`} key={translation.id} >
     <div className="flex w-full h-10  pl-10 hover:bg-gray-50 hover:cursor-pointer items-center ">
     {translation.sourceText}
     </div>
</Link>
      ))}
    </div>
  )
}

export default TranslationHistory
