"use client"

import { useRouter } from "next/navigation"

interface Props {
    text:string
    id:string
}

const TranslationHistoryNavigation = ({text,id}: Props) => {
    const router = useRouter()

    
  return (
<div className=" whitespace-nowrap overflow-hidden text-ellipsis w-full hover:cursor-pointer" onClick={()=>{router.push(`/translation/${id}`)}}>
 {text}
</div>
  )
}

export default TranslationHistoryNavigation
