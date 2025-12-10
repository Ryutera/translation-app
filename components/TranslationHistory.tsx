
import { deleteTranslationHistory, getTranslationHistory } from "@/app/action"
import Link from "next/link"
import TranslationDeleteButton from "./TranslationDeleteButton"

interface Props {
  userId?: string | undefined
}

const TranslationHistory = async ({ userId }: Props) => {
  const translations = await getTranslationHistory(userId!)

  return (
   <div className="flex flex-col h-[80%] overflow-y-scroll gap-3 justify-center mt-12">
  {translations.map((translation) => (
    <div
      key={translation.id}
      className="flex w-full justify-between  h-10 px-10 items-center hover:bg-gray-50"
    >
      <Link
        href={`/translation/${translation.id}`}
        className="flex-1 hover:underline"
      >
        {translation.sourceText}
      </Link>

      <TranslationDeleteButton id={translation.id} />
    </div>
  ))}
</div>
  )
}


export default TranslationHistory
