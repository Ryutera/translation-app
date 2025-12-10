"use client"
import { useState } from "react";
import RecordButton from "./RecordButton";
import { generateTranslation } from "@/app/action";
import useQuota from "@/app/hooks/useQuota";
import ResultView from "./ResultView";
import { useRouter } from "next/navigation";



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
}
const TextInputField = ({ userId }: Props) => {
    const [inputText, setInputText] = useState("")
    const [loading, setLoading] = useState(false)
    const [output, setOutput] = useState<TranslationResult | null>(null)
    const { decreaseCount, remaining ,isLimitReached} = useQuota(userId)
    const router = useRouter()


    const getTranslationData = async () => {
        try {
            setLoading(true)
            const res = await generateTranslation(inputText)
            if (!res) {
                return
            }
            const data = await JSON.parse(res)
            setOutput(data as TranslationResult)

        } catch (err) {
            return err
        } finally {
            setLoading(false)
        }
    }


    return (

        <div className="my-10 w-full text-center flex flex-col items-center gap-5">
            {userId ?
                //無料ログインユーザー
                isLimitReached?  <p className="text-sm">本日の利用制限に達しました</p> : <p>ログインユーザー 利用回数{remaining}/10</p>
                :
                //非ログインユーザー
                isLimitReached ? <p className="text-sm">利用制限に達しました</p>:<p className="text-sm">無料翻訳　{remaining}/3</p>
                }
{/* 
            <button onClick={()=>localStorage.setItem("usageCount",JSON.stringify(3))}>reset</button>
        <button onClick={()=>checkQuotaToday(userId!)}>アクション</button> */}

            <div className={`${(output || loading) && "md:grid grid-cols-2"}  md:w-[60%] w-[85%] gap-5`}>
                <textarea placeholder="好きな言語で入力..." className="bg-white w-full md:h-72 rounded-xl p-2 outline-none mb-5" onChange={(e) => setInputText(e.target.value)} value={inputText} />
                <ResultView loading={loading} output={output}/>
            </div>


            <div className="flex flex-row">
                <RecordButton />

            </div>
            {isLimitReached 
            ?
            <button onClick={()=>router.push("/auth/sign-up")} className="bg-red-300 cursor-pointer  md:w-[60%] w-[85%] py-3 rounded-2xl font-semibold text-white  outline-none">ログインして利用回数を増やす</button>
            :
            <button onClick={() => { getTranslationData(); decreaseCount() }} disabled={!inputText} className={`${ inputText  ? "bg-red-300 cursor-pointer " : "bg-slate-300 cursor-default "} md:w-[60%] w-[85%] py-3 rounded-2xl font-semibold text-white  outline-none`}>翻訳 (ほんやく)</button>
            
            }
                
            </div>


    )
}

export default TextInputField
