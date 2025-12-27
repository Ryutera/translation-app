"use client";

import { useLangOpstion } from "@/lib/store/useLangOption";
import { LangType } from "@/lib/type/type";

const UI = {
  Japanese: {
    headline: "「自然に聞こえる」日本語に整える。",
    sub: "直訳っぽさを消して、ネイティブが使う自然な表現に。",
    
  },
  English: {
    headline: "Translate into Japanese that actually sounds natural.",
    sub: "Remove the “translated” feel and get Japanese that reads like a native wrote it.",
    
  },
  Korean: {
    headline: "자연스럽게 들리는 일본어로 다듬어 드려요.",
    sub: "직역 느낌을 줄이고, 일본인이 쓰는 자연스러운 표현으로 정리합니다.",
   
  },
  Chinese: {
    headline: "翻成真正“像日本人会说”的日语。",
    sub: "去掉直译感，变成自然、清晰、能直接用的日语表达。",
    
  },
} as const;

const HeroSection = () => {
  const selectedLang = useLangOpstion((s) => s.selectedLang) as LangType;
  const t = UI[selectedLang] ?? UI.Japanese;

  return (
    <section className="mt-6">
      <h2 className="text-xl md:text-3xl font-extrabold text-gray-800 leading-snug tracking-tight">
        {t.headline}
      </h2>

      <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed max-w-[56ch]">
        {t.sub}
      </p>

     
    </section>
  );
};

export default HeroSection;