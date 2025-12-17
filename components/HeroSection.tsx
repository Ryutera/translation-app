"use client"
import { useLangOpstion } from "@/lib/store/useLangOption"
import { LangType } from "@/lib/type/type"


const HeroSection = () => {

    const selectedLang = useLangOpstion((state) => state.selectedLang) as LangType

const Translations = {
  Japanese: {
    first: "本では学べない、",
    highlight: "生きた",
    last: "日本語を。"
  },
  English: {
    first: "Go beyond textbooks.",
    highlight: "Real",
    last: "Japanese at your fingertips."
  },
  Korean: {
    first: "책에서는 배울 수 없는,",
    highlight: "살아있는",
    last: "일본어를 내 손안에."
  },
  Chinese: {
    first: "书本上学不到的，",
    highlight: "地道",
    last: "日语表达。"
  }
};

    return (
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 leading-snug mt-6">
            {Translations[selectedLang].first} <br className="md:hidden" />
            <span className="text-red-400">{Translations[selectedLang].highlight} </span>{Translations[selectedLang].last}
        </h2>
    )
}

export default HeroSection
