"use client"

import { useLangOpstion } from "@/lib/store/useLangOption"
import { LangType } from "@/lib/type/type"

const TranslationErrorMessage = () => {
const selectedLang = useLangOpstion((state)=>state.selectedLang) as LangType

const translations = {
  Japanese: {
    message: "翻訳できませんでした😓",
  },
  English: {
    message: "Translation failed 😓",
  },
  Korean: {
    message: "번역할 수 없었습니다 😓",
  },
  Chinese: {
    message: "未能完成翻译 😓",
  },
};

  return (
   <div className="flex items-center justify-center  w-full ">{translations[selectedLang].message}</div>
  
  )
}

export default TranslationErrorMessage
