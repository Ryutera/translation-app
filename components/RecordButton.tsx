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


// //ここがエラーの原因になっていそう
//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }




  useEffect(() => { setInputText(transcript) }, [transcript])
  return (
    <div>
      {listening ?

        <button onClick={() => { SpeechRecognition.stopListening() }}>
          <Check />
        </button>

        :
        <button onClick={() => {
          resetTranscript(); SpeechRecognition.startListening({
            continuous: true,
            interimResults: true,
            language: selectedLang
          })
        }}>
          <Mic />
        </button>
      }


    </div>
  );
};
export default RecordButton;