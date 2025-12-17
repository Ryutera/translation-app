"use client"

import { useLangOpstion } from '@/lib/store/useLangOption'
import { 
  Select ,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,} from './ui/select'

const LangSelector = () => {
    const {selectedLang,setLang} = useLangOpstion()



  return (
  <Select onValueChange={(value)=>setLang(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={selectedLang}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Japanese" >日本語</SelectItem>
          <SelectItem value="Korean" >한국어</SelectItem>
          <SelectItem value="Chinese" >中文</SelectItem>
          <SelectItem value="English" >English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default LangSelector
