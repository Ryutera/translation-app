"use client"

import { useLangOpstion } from '@/lib/store/useLangOption'
import { 
  Select ,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,} from './ui/select'
import { Globe } from 'lucide-react'

const LangSelector = () => {
    const {selectedLang,setLang} = useLangOpstion()



  return (
   
  <Select onValueChange={(value)=>setLang(value)} >
      <SelectTrigger className="w-full hover:bg-neutral-50 py-3">
        <Globe className='text-blue-400 '/>
        <SelectValue placeholder={"日本語"}/>
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
          <SelectItem value="Japanese">日本語</SelectItem>
          <SelectItem value="Korean" >한국어</SelectItem>
          <SelectItem value="Chinese" >中文</SelectItem>
          <SelectItem value="English" >English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
   
  )
}

export default LangSelector
