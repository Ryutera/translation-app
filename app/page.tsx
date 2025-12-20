

import { Suspense } from "react";
import TextInputFieldServer from "@/components/TextInputFieldServer";
import Introduction from "@/components/Introduction";
import HeroSection from "@/components/HeroSection";


export default async function Home() {


  return (
    <main className="flex flex-col items-center w-full bg-[#ffd1d112] overflow-scroll"
     >
  
 
      <div className="mt-16 mb-8 w-[85%] md:w-[60%] text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-black text-red-400  mb-4 tracking-tight">
          Pera<span className="">phrase</span>
        </h1>
        <HeroSection/>
      </div>

<Suspense>
  {/* サーバー側からuserIdを渡すためのコンポーネント */}
  <TextInputFieldServer/>
</Suspense>
     
<Introduction/>

 <footer className="w-full py-8 md:py-10 px-6 md:px-12 mt-10 border-t border-amber-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-gray-500 text-sm">
      
     
      <p className="text-center md:text-left order-2 md:order-1">
        © 2025 Peraphrase. All rights reserved.
      </p>

    
      <div className="flex flex-row gap-6 items-center order-1 md:order-2">
        <a 
          href="mailto:ryutera.dev@gmail.com" 
          className="hover:text-gray-700 transition-colors duration-200"
        >
          Contact
        </a>
       
        <a 
          href="/commercial-law" 
          className="hover:text-gray-700 transition-colors duration-200"
        >
          Terms of Service
        </a>
      </div>

    </footer>

     
    </main>
  );
}
