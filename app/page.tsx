

import { Suspense } from "react";
import TextInputFieldServer from "@/components/TextInputFieldServer";
import Introduction from "@/components/Introduction";
import HeroSection from "@/components/HeroSection";

export default async function Home() {


  return (
    <main className="flex flex-col items-center w-full bg-red-50 overflow-scroll" >
  
 
      <div className="mt-16 mb-8 w-[85%] md:w-[60%] text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-black text-red-400 mb-4 tracking-tight">
          TameGo
        </h1>
        <HeroSection/>
      </div>

<Suspense>
  {/* サーバー側からuserIdを渡すためのコンポーネント */}
  <TextInputFieldServer/>
</Suspense>
     
<Introduction/>
     
    </main>
  );
}
