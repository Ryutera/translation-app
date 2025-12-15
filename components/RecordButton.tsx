"use client"
import { Mic, MicOff } from 'lucide-react';
import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


interface Props {
  setInputText: any
}
const RecordButton = ({ setInputText }: Props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }




  useEffect(() => { setInputText(transcript) }, [transcript])
  return (
    <div>
      {listening? 
      
      <button onClick={() => { SpeechRecognition.stopListening() }}>
        <MicOff />
      </button>

      :
      <button  onClick={() => {
        resetTranscript(); SpeechRecognition.startListening({
          continuous: true,
          interimResults: true,
          language: "en-US", // or "en-GB"
        })
      }}>
       <Mic/>
      </button>
        }


    </div>
  );
};
export default RecordButton;