"use client"
import { useLangOpstion } from '@/lib/store/useLangOption';
import { Check, Mic, MicOff, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


interface Props {
  setInputText: any
}
const RecordButton = ({ setInputText }: Props) => {
  const [selectedLang , setSelectedLang] = useState("en-US")

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const lang = useLangOpstion((state) => state.selectedLang)

useEffect(()=>{
    if (lang === "English") {
    setSelectedLang( "en-US")
  } else if (lang === "Chinese") {
    setSelectedLang("zh-cn") 
  } else if (lang === "Korean") {
    setSelectedLang("ko") 
  } else if (lang === "Japanese") {
    setSelectedLang("ja") 
  }
},[lang])


  useEffect(() => { setInputText(transcript) }, [transcript])
  return (
    <div>
      {listening ?

        <button 
         className='rounded-full bg-red-50 p-1'
        onClick={() => { SpeechRecognition.stopListening() }}>
          <Check className='text-red-300'/>
        </button>

        :
        <button 
        className='rounded-full bg-red-50 p-1'
        onClick={() => {
          resetTranscript(); SpeechRecognition.startListening({
            continuous: true,
            interimResults: true,
            language: selectedLang
          })
        }}>
          <Mic className='text-red-300'/>
        </button>
      }


    </div>
  );
};
export default RecordButton;