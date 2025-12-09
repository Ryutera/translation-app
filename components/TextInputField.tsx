"use client"
import { useState } from "react";
import RecordButton from "./RecordButton";
import { generateTranslation } from "@/app/action";

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


const TextInputField = () => {
    const [inputText, setInputText] = useState("")
    const [loading, setLoading] = useState(false)
    const [output, setOutput] = useState<TranslationResult|null>(null)


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
if (output?.status==="ok") {
     translation = output?.translationJa
 meaning= output?.meaningUserLang
 notes = output?.notes
}

    


 console.log(translation,"翻訳")

    return (

        <div className="my-10 w-full text-center flex flex-col items-center gap-5">

            <div className={`${(output||loading) && "md:grid grid-cols-2"}  md:w-[60%] w-[85%] gap-5`}>
                <textarea placeholder="好きな言語で入力..." className="bg-white w-full md:h-72 rounded-xl p-2 outline-none mb-5" onChange={(e) => setInputText(e.target.value)} value={inputText} />


                {loading ?
                output?.status === "invalid_input"? <>invalid</>: 
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

            <button onClick={getTranslationData} className={`${inputText ? "bg-red-300 cursor-pointer " : "bg-slate-300 cursor-default "} md:w-[60%] w-[85%] py-3 rounded-2xl font-semibold text-white  outline-none`}>翻訳する ↑</button>

        </div>


    )
}

export default TextInputField
