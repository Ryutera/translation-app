

import Link from "next/link";
import { AuthButton } from "@/components/auth-button";
import HamburgerMenu from "./HamburgerMenu";
import LangSelector from "./LangSelector";



const HeaderAuth = () => {


  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-white">
      <div className="w-full max-w-5xl grid grid-cols-3 items-center p-3 px-5 text-sm">

        <HamburgerMenu />

        <div className="text-red-400 font-bold text-lg h-full flex justify-center items-center "><Link href={"/"}>Peraphrase</Link></div>

        <div className="flex flex-row gap-3 justify-end items-center">
          <div className="w-22 hidden md:block">
            <LangSelector />
          </div>

          <AuthButton />
        </div>


      </div>
    </nav>
  )
}

export default HeaderAuth