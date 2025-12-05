"use client"
import { useState } from "react";
import RecordButton from "./RecordButton";
import { generateTranslation } from "@/app/action";


const TextInputField = () => {
    const [inputText, setInputText] = useState("")
    const [loading, setLoading] = useState(false)
    const handleDatafetch =async()=>{
    try {
        setLoading(true)
  const res =  await generateTranslation(inputText)
       const data =  JSON.parse(res)
       console.log(data,"レス")
    }catch(err){
return err 
    }finally{
        setLoading(false)
    }
     
    }
    return (
        
        <div className="my-10 w-full text-center flex flex-col items-center gap-5">
            
            <textarea placeholder="好きな言語で入力..." className="relative bg-white h-48 md:w-[60%] w-[85%] rounded-xl p-2 outline-none" onChange={(e) => setInputText(e.target.value)} value={inputText} />
                
                <div className="">
                    <RecordButton/>
                </div>
            <button onClick={handleDatafetch} className={`${inputText? "bg-red-300 cursor-pointer ":"bg-slate-300 cursor-default " } md:w-[60%] w-[85%] py-3 rounded-2xl font-semibold text-white  outline-none`}>翻訳する ↑</button>
            {loading? <p>Loading...</p> : <></>}
        </div>
      

    )
}

export default TextInputField
