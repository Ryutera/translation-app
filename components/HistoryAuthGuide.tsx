"use client"

import { useLangOpstion } from "@/lib/store/useLangOption"
import { LangType } from "@/lib/type/type";

const HistoryAuthGuide = () => {
    const selectedLang = useLangOpstion((state)=>state.selectedLang)　as LangType

    const translations = {
  Japanese: {
    message: "ログインするとここから翻訳履歴にアクセスできます",
  },
  English: {
    message: "Log in to access your translation history here",
  },
  Korean: {
    message: "로그인하면 여기서 번역 기록을 확인할 수 있습니다",
  },
  Chinese: {
    message: "登录后即可在此查看翻译历史",
  },
};

  return (
    <div className="flex flex-col items-center justify-center h-[80%] mt-10 px-6 text-center">
         {translations[selectedLang].message}
        </div>
  )
}

export default HistoryAuthGuide
