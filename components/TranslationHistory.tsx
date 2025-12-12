
import { getTranslationHistory } from "@/app/action"
import Link from "next/link"
import TranslationDeleteButton from "./TranslationDeleteButton"
import TranslationHistoryNavigation from "./TranslationHistoryNavigation"

interface Props {
  userId?: string | undefined
}

const TranslationHistory = async ({ userId }: Props) => {
  const translations = await getTranslationHistory(userId!)

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