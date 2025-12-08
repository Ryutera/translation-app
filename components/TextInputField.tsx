"use client"
import { useState } from "react";
import RecordButton from "./RecordButton";
import { generateTranslation } from "@/app/action";
import { useLangOpstion } from "@/lib/store/useLangOption";



const TextInputField = () => {
    const [inputText, setInputText] = useState("")
    const [loading, setLoading] = useState(false)
    const [output, setOutput] = useState(null)
    const selectedLang = useLangOpstion((state) => state.selectedLang)


    const getTranslationData = async () => {
        try {
            setLoading(true)
            const res = await generateTranslation(inputText, selectedLang)

            const data = JSON.parse(res)
            
            setOutput(data)
        } catch (err) {
            return err
        } finally {
            setLoading(false)
        }

    }



    const translation = (output as any)?.output_text.split("Meaning:")[0].replace("Translation (Japanese):", "").trim()
    const meaning = (output as any)?.output_text.split("Meaning:")[1].split("Explanation:")[0].trim()
    const explanations = (output as any)?.output_text.split("Explanation:")[1].split(".")
 

    return (

        <div className="my-10 w-full text-center flex flex-col items-center gap-5">

            <div className={`${(output||loading) && "md:grid grid-cols-2"}  md:w-[60%] w-[85%] gap-5`}>
                <textarea placeholder="好きな言語で入力..." className="bg-white w-full md:h-72 rounded-xl p-2 outline-none mb-5" onChange={(e) => setInputText(e.target.value)} value={inputText} />


                {loading ?
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
                                    {explanations.map((exp: string[], index: number) => (
                                        <li className="mb-2 " key={index}>・{exp}</li>
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
