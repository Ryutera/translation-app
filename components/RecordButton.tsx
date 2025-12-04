import React, { useState } from "react";
import { Mic, MicOff } from "lucide-react";
import { useVoiceToText } from "react-speakup";

const RecordButton = () => {
    const [isRecording, setIsRecording] = useState(false)    
  const { startListening, stopListening, transcript} = useVoiceToText({
    continuous: true,
    lang: "en-US",
  });


  return (
    <div className="flex flex-col gap-6">
      {" "}
      <div className="flex gap-6">
        <div onClick={()=>setIsRecording(prev=>!prev)} >
 {isRecording?  <MicOff onClick={stopListening} role="button" />: <Mic onClick={startListening} role="button" />   } 
       
        </div>
   
       
      </div>
      <h2>{transcript}</h2>
    </div>
  );
};

export default  RecordButton;