
import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


interface Props {
setInputText:any
}
const Dictaphone = ({setInputText}:Props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  

useEffect(()=>{setInputText(transcript)},[transcript])
  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button type="button" onClick={()=>SpeechRecognition.startListening()}>
        入力開始
      </button>
      <button type="button" onClick={() => {SpeechRecognition.stopListening()}}>
        Stop
      </button>
      <button type="button" onClick={() => resetTranscript()}>
        リセット
      </button>
    </div>
  );
};
export default Dictaphone;