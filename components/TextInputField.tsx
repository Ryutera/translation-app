"use client"
import { useState } from "react";

const TextInputField = () => {
    const [inputText, setInputText] = useState("")
    return (
        <div className="my-10 w-full text-center flex flex-col items-center gap-5">
            <textarea placeholder="好きな言語で入力..." className="bg-white h-48 md:w-[60%] w-[85%] rounded-xl p-2 outline-none" onChange={(e) => setInputText(e.target.value)} value={inputText} />
            <button className={`${inputText? "bg-red-300 cursor-pointer ":"bg-slate-300 cursor-default " } md:w-[60%] w-[85%] py-3 rounded-2xl font-semibold text-white  outline-none`}>翻訳する ↑</button>
        </div>

    )
}

export default TextInputField
