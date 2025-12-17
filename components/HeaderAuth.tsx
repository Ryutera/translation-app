
import Link from "next/link";
import { Suspense} from "react";
import { AuthButton } from "@/components/auth-button";
import HamburgerMenu from "./HamburgerMenu";

 

const HeaderAuth = () => {


  return (
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-white">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <Suspense>
           <HamburgerMenu/>
           </Suspense>
            <div className="text-red-400 font-bold text-lg h-full flex justify-center items-center "><Link href={"/"}>TameGo</Link></div>  
              <Suspense>
                <AuthButton/>
              </Suspense>
          </div>
        </nav> 
  )
}

export default HeaderAuth