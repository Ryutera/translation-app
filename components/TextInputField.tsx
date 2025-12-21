"use client"
import { useEffect, useState } from "react";
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
    userId?: string
    ifPremium?: boolean
}
const TextInputField = ({ userId, ifPremium }: Props) => {
    const [inputText, setInputText] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const [output, setOutput] = useState<TranslationResult | null>(null)
    const { decreaseCount, remaining, isLimitReached } = useQuota()
    const router = useRouter()
    const selectedLang = useLangOpstion((state) => state.selectedLang) as LangType
  

    const t = TRANSLATION_UI[selectedLang] || TRANSLATION_UI.Japanese

    const getTranslationData = async () => {
        try {
            setLoading(true)
            const res = await generateTranslation(inputText)
            if (!res) {
                return
            }
            const data = await JSON.parse(res)
            setOutput(data as TranslationResult)

            //履歴を即時表示するため
            router.refresh()

        } catch (err) {
            return err
        } finally {
            setLoading(false)

        }
    }

    const renderTranslationButton = () => {
        if (ifPremium) {
            return (<button onClick={getTranslationData} disabled={!inputText} className={`${inputText ? "bg-red-300 cursor-pointer " : "bg-slate-300 cursor-default "} md:w-[60%] w-[85%] py-3 rounded-2xl font-semibold text-white  outline-none`}>{t.translate}</button>)
        } else if (userId && !isLimitReached) {
            return (<button onClick={() => { getTranslationData(); decreaseCount() }} disabled={!inputText} className={`${inputText ? "bg-red-300 cursor-pointer " : "bg-slate-300 cursor-default "} md:w-[60%] w-[85%] py-3 rounded-2xl font-semibold text-white  outline-none`}>{t.translate}</button>)
        } else if (userId && isLimitReached) {
            return (

                <Dialog>
                    <DialogTrigger asChild><button className="bg-red-300 cursor-pointer  md:w-[60%] w-[85%] py-3 rounded-2xl font-semibold text-white  outline-none">{t.upgradePremium}</button></DialogTrigger>
                    <PremiumOptionDialog />
                </Dialog>

            )
        } else if (!userId && !isLimitReached) {
            return (<button onClick={() => { getTranslationData(); decreaseCount() }} disabled={!inputText} className={`${inputText ? "bg-red-300 cursor-pointer " : "bg-slate-300 cursor-default "} md:w-[60%] w-[85%] py-3 rounded-2xl font-semibold text-white  outline-none`}>{t.translate}</button>)
        } else if (!userId && isLimitReached) {
            return (<button onClick={() => router.push("/auth/sign-up")} className="bg-red-300 cursor-pointer  md:w-[60%] w-[85%] py-3 rounded-2xl font-semibold text-white  outline-none">{t.loginToIncrease}</button>)
        }
    }



    return (

        <div className="my-10 w-full text-center flex flex-col items-center gap-5">
            {ifPremium ?
                <></>
                : userId ?
                    //無料ログインユーザー
                    isLimitReached ? <p className="text-sm">{t.limitDaily}<br />{t.resetNotice}</p> : <p>{t.remainingDaily} {remaining}/10</p>
                    :
                    //非ログインユーザー
                    isLimitReached ? <p className="text-sm">{t.limitReached}</p> : <p className="text-sm">{t.remainingFree}　{remaining}/3</p>
            }

       



            <div className={`${(output || loading) && "md:grid grid-cols-2"}  md:w-[60%] w-[85%] gap-5`}>
                <div className="relative w-full md:h-80 h-48">
                    <textarea placeholder={`${t.placeholder}`} className="bg-white w-full md:h-72 h-36 rounded-xl p-2 outline-none mb-5 resize-none border border-3" onChange={(e) => setInputText(e.target.value)} value={inputText} />
                    <div className="absolute md:bottom-8 bottom-12 right-1 flex items-center justify-center rounded-full p-2">
                        <RecordButton setInputText={setInputText} />
                    </div>
                </div>

                <ResultView loading={loading} output={output} />
            </div>

            {renderTranslationButton()}


        </div>


    )
}


export default TextInputField
