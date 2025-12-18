

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

 <footer className="w-full py-10 mt-10 border-t border-amber-100 flex flex-col items-center gap-4 text-gray-500 text-sm">
    <div className="flex gap-6">
      <a href="mailto:your-email@example.com" className="hover:text-gray-700">
        Contact
      </a>
    </div>
    <p>© 2025 Peraphrase. All rights reserved.</p>
  </footer>

     
    </main>
  );
}
