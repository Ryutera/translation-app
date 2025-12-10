"use client"
import { useEffect, useState } from "react";
import RecordButton from "./RecordButton";
import { generateTranslation } from "@/app/action";
import getUserId from "@/lib/supabase/getUserId";

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
    userId: string|undefined
}
const TextInputField = (userId:Props) => {
    const [inputText, setInputText] = useState("")
    const [loading, setLoading] = useState(false)
    const [output, setOutput] = useState<TranslationResult | null>(null)
    const [usageCount, setUsageCount] = useState<number|null>(null)
  
    console.log(userId)

    useEffect(() => {
        const data = localStorage.getItem("usageCount")
        // ローカルストレージにデータがない場合に初期値の3を入れる
        if (!data) {
            localStorage.setItem("usageCount", JSON.stringify(3))
            setUsageCount(3)
          
        } else {
            const count = JSON.parse(data)
            count < 0 ? setUsageCount(0) : setUsageCount(count)
        }
    }, [])




    const decreaceCount = () => {

      const data = localStorage.getItem("usageCount")
            let count = JSON.parse(data!)
            if (count <= 0) {
                setUsageCount(0)
                return
            }
            count -= 1
            setUsageCount(count)
            localStorage.setItem("usageCount", count)
        
    }



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




    let translation
    let meaning
    let notes
    if (output?.status === "ok") {
        translation = output?.translationJa
        meaning = output?.meaningUserLang
        notes = output?.notes
    }



    return (

        <div className="my-10 w-full text-center flex flex-col items-center gap-5">
            {usageCount?  <p className="text-sm">無料翻訳　{usageCount}/3</p>:  <p className="text-sm">利用制限に達しました</p> }
            <button onClick={()=>localStorage.setItem("usageCount",JSON.stringify(2))}>reset</button>
            <div className={`${(output || loading) && "md:grid grid-cols-2"}  md:w-[60%] w-[85%] gap-5`}>
                <textarea placeholder="好きな言語で入力..." className="bg-white w-full md:h-72 rounded-xl p-2 outline-none mb-5" onChange={(e) => setInputText(e.target.value)} value={inputText} />


                {loading ?
                    output?.status === "invalid_input" ? <>invalid</> :
                        <div className="flex items-center justify-center  w-full ">
                            <p id="loading">Loading
                                <span className="dot">.</span>
                                <span className="dot">.</span>
                                <span className="dot">.</span></p>
                        </div>
                    : output ?
                        <div className=" flex items-start justify-start flex-col gap-5 ">
                            <div className="text-left bg-red-300 p-2 rounded-lg text-white font-semibold w-full">
                                <p>Translation</p>
                                <p>{translation}</p>
                            </div>

                            <div className="text-left bg-red-300 p-2 rounded-lg text-white font-semibold w-full">
                                <p>Meaning</p>
                                <p>{meaning}</p>
                            </div>

                            <div className="text-left bg-red-300 p-2 rounded-lg text-white font-semibold w-full">
                                <p>Explanation</p>
                                <ul>
                                    {notes?.map((note: string, index: number) => (
                                        <li className="mb-2 " key={index}>・{note}</li>
                                    ))}
                                </ul>

                            </div>
                        </div> : ""}

            </div>


            <div className="flex flex-row">
                <RecordButton />

            </div>

            <button onClick={() => { getTranslationData(); decreaceCount() }} disabled={!usageCount||!inputText} className={`${inputText ? "bg-red-300 cursor-pointer " : "bg-slate-300 cursor-default "} md:w-[60%] w-[85%] py-3 rounded-2xl font-semibold text-white  outline-none`}>翻訳する ↑</button>

        </div>


    )
}

export default TextInputField
