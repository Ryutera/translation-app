"use client"
import { useState } from "react";
import RecordButton from "./RecordButton";
import { generateTranslation } from "@/app/action";
import { useLangOpstion } from "@/lib/store/useLangOption";


const TextInputField = () => {
    const [inputText, setInputText] = useState("")
    const [loading, setLoading] = useState(false)
    const [output, setOutput] = useState(null)
    const selectedLang = useLangOpstion((state)=>state.selectedLang)
     const selectCHN = useLangOpstion((state)=>state.selectCHN)
      const selectKOR = useLangOpstion((state)=>state.selectKOR)
       const selectENG = useLangOpstion((state)=>state.selectENG)


       console.log((output as any)?.output_text as string,"データ")
       const handleSelection = (e:any)=>{
       switch (e.target.value) {
        case "English":
            selectENG()
            break;

              case "Korean":
            selectKOR()
            break;

              case "Chinese":
            selectCHN()
            break;
       }
       }

    const handleDatafetch =async()=>{
    try {
        setLoading(true)
  const res =  await generateTranslation(inputText,selectedLang)

       const data =  JSON.parse(res)
       console.log(data,"レス")
       setOutput(data)
    }catch(err){
return err 
    }finally{
        setLoading(false)
    }
     
    }

     const translation = (output as any)?.output_text.split("Meaning:")[0].replace("Translation (Japanese):", "").trim()
     const meaning = (output as any)?.output_text.split("Meaning:")[1].split("Explanation:")[0].trim()
     const explanations = (output as any)?.output_text.split("Explanation:")[1].split(".")
     console.log(translation,"翻訳")
      console.log(meaning,"意味")
      console.log(explanations,"説明")


    return (
        
        <div className="my-10 w-full text-center flex flex-col items-center gap-5">
            
            <div className={`${output && "md:grid grid-cols-2"}  md:w-[60%] w-[85%] gap-5`}>
            <textarea placeholder="好きな言語で入力..." className="relative bg-white w-full h-72 rounded-xl p-2 outline-none" onChange={(e) => setInputText(e.target.value)} value={inputText} />
           
           
          {output?
          <div className=" flex items-start justify-start flex-col gap-5">
            <div className="text-left bg-red-300 p-2 rounded-lg text-white font-semibold">
            <p>Translation</p>
            <p>{translation}</p>
            </div>

            <div className="text-left bg-red-300 p-2 rounded-lg text-white font-semibold">
            <p>Meaning</p>
            <p>{meaning}</p>
             </div>

             <div  className="text-left bg-red-300 p-2 rounded-lg text-white font-semibold">
            <p>Explanation</p>
            <ul>
            {explanations.map((exp:string[],index:number)=>(
               <li className="mb-2" key={index}>{exp}</li>
            ))}
            </ul>

            </div>
             </div>   :""}
           
            </div>
                

                <div className="flex flex-row">
                    <RecordButton/>
                    <div>
                    <p>入力言語を選択</p>
                    <select name="" id="" onChange={(e)=>handleSelection(e)} className="rounded-xl py-1 ">
                        <option value="English">English</option>
                        <option value="Chinese" >Chinese</option>
                        <option value="Korean" >Korean</option>
                    </select>
                    </div>
                </div>

            <button onClick={handleDatafetch} className={`${inputText? "bg-red-300 cursor-pointer ":"bg-slate-300 cursor-default " } md:w-[60%] w-[85%] py-3 rounded-2xl font-semibold text-white  outline-none`}>翻訳する ↑</button>
            {loading? <p>Loading...</p> : <></>}
        </div>
      

    )
}

export default TextInputField
