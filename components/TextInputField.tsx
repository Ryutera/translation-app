"use client"
import { useState } from "react";
import RecordButton from "./RecordButton";
import { generateTranslation } from "@/app/action";
import useQuota from "@/app/hooks/useQuota";
import ResultView from "./ResultView";
import { useRouter } from "next/navigation";
import { Dialog, DialogTrigger } from "./ui/dialog";
import PremiumOptionDialog from "./PremiumOptionDialog";
import { TRANSLATION_UI } from "@/app/constants/textInputFieldData";
import { useLangOpstion } from "@/lib/store/useLangOption";
import { LangType } from "@/lib/type/type";
import { Info } from "lucide-react";



type TranslationResultOk = {
    status: "ok";
    detectedLang: string;
    translationJa: string;
    meaningUserLang: string;
    notes: string[];
};

type TranslationResultInvalid = {
    status: "invalid_input";
    detectedLang: string | null;
    messageUserLang: string;
};

export type TranslationResult = TranslationResultOk | TranslationResultInvalid;


interface Props {
    isLoggedIn?: boolean
    isPremium?: boolean
}
const TextInputField = ({ isLoggedIn, isPremium }: Props) => {
    const [inputText, setInputText] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const [output, setOutput] = useState<TranslationResult | null>(null)
    const { decreaseCount, remaining, isLimitReached, setIsLimitReached } = useQuota()
    const router = useRouter()
    const selectedLang = useLangOpstion((state) => state.selectedLang) as LangType


    const t = TRANSLATION_UI[selectedLang] || TRANSLATION_UI.Japanese

    const getTranslationData = async () => {
        try {
            setLoading(true)
            const res = await generateTranslation(inputText)
            const data = await JSON.parse(res)

            if (data.status === "limit_reached") {
                setIsLimitReached(true)
                return
            }

            setOutput(data as TranslationResult)

            router.refresh()

        } catch (err) {
            return err
        } finally {
            setLoading(false)

        }
    }


    const isPremiumUser = isPremium;
    const isFreeUser = isLoggedIn && !isPremiumUser ;
    const isGuest = !isLoggedIn;

    const canTranslate =
  Boolean(inputText.trim()) &&
  (isPremiumUser || !isLimitReached) &&
  !loading;

const renderTranslationButton = () => {
  const shouldConsumeQuota = !isPremiumUser;

  const handleTranslate = async () => {
    await getTranslationData();
    if (shouldConsumeQuota) decreaseCount();
  };

  const baseClass =
    "md:w-[60%] w-[85%] py-3 rounded-2xl font-semibold text-white outline-none";

  const translateClass = `${baseClass} ${
    canTranslate ? "bg-red-300 cursor-pointer" : "bg-slate-300 cursor-default"
  }`;

  const primaryClass = `${baseClass} bg-red-300 cursor-pointer`;

  // 制限到達（プレミアム以外）
  if (!isPremiumUser && isLimitReached) {
    if (isFreeUser) {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <button className={primaryClass}>{t.upgradePremium}</button>
          </DialogTrigger>
          <PremiumOptionDialog />
        </Dialog>
      );
    }

    if (isGuest) {
      return (
        <button
          onClick={() => router.push("/auth/sign-up")}
          className={primaryClass}
        >
          {t.loginToIncrease}
        </button>
      );
    }
  }

  return (
    <button
      disabled={!canTranslate}
      onClick={handleTranslate}
      className={translateClass}
    >
      {t.translate}
    </button>
  );
};


const getQuotaMessage = () =>{
    if (isPremiumUser) return null
    
    if (isLoggedIn) {
        if (isLimitReached) {
           return  <p className="text-sm">{t.limitDaily}<br />{t.resetNotice}</p> 
        }else{
           return  <p>{t.remainingDaily} {remaining}/10</p>
        }
    }

    if (isGuest) {
        if (isLimitReached) {
           return  <p className="text-sm">{t.limitReached}</p>
        }else{
           return  <p className="text-sm">{t.remainingFree}　{remaining}/3</p>
        }
        
    }
}



    return (

        <div className="my-10 w-full text-center flex flex-col items-center gap-5">
           
           {getQuotaMessage()}

            <div className={`${(output || loading) && "md:grid grid-cols-2"}  md:w-[60%] w-[85%] gap-5`}>
                <div className="relative w-full md:h-80 h-48">
                    <textarea placeholder={`${t.placeholder}`} className="bg-white w-full md:h-72 h-36 rounded-xl p-2 outline-none  resize-none border border-3" onChange={(e) => setInputText(e.target.value)} value={inputText} />
                    <div className="absolute md:bottom-8 bottom-12 right-1 flex items-center justify-center rounded-full p-2">
                        <RecordButton setInputText={setInputText} />

                    </div>

                </div>


                <ResultView loading={loading} output={output} />

            </div>


            {renderTranslationButton()}

            <div className="w-[85%] md:w-[60%] flex justify-end ">
                <div
                    className="
      flex items-start items-center gap-1
      text-[8px] md:text-[10px] sm:text-xs text-slate-500
      bg-white/90 px-2 py-1 rounded-full
      border border-slate-100 shadow-sm
      leading-tight
      max-w-full md:max-w-[420px]
    "
                >
                    <Info size={12} className="mt-[1px] shrink-0 text-slate-400" />
                    <span className="break-words">
                        {t.note}
                    </span>
                </div>
            </div>

        </div>


    )
}


export default TextInputField
