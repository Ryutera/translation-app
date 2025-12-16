

import { Suspense } from "react";
import TextInputFieldServer from "@/components/TextInputFieldServer";
import Introduction from "@/components/Introduction";

export default async function Home() {


  return (
    <main className="flex flex-col items-center w-full bg-red-50 overflow-scroll" >
  
 
<div className="mt-20 mb-1 w-[80%] md:w-[60%]">
  <h1 className="text-3xl mb-10">日本語の自然な表現をAIが翻訳!</h1>  
</div>


<Suspense>
  {/* サーバー側からuserIdを渡すためのコンポーネント */}
  <TextInputFieldServer/>
</Suspense>
     
<Introduction/>
     
    </main>
  );
}
