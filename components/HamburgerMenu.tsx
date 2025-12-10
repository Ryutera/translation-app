import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { createClient } from "@/lib/supabase/server"

import { Menu } from "lucide-react"
import SubscriptionOption from "./SubscriptionOption"

import Link from "next/link"
import LangSelector from "./LangSelector"
import { DialogHeader } from "./ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import TranslationHistory from "./TranslationHistory"
import { Suspense } from "react"


const HamburgerMenu = async () => {

  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;
  const userId = user?.sub


  return (

    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      
          <DialogHeader className="sr-only">
        <DialogTitle/>
      </DialogHeader>
   
    

      <SheetContent>
        <div className="flex flex-col justify-between h-full ">

        <div className="flex justify-end  auto-rows-min gap-6 px-4 mt-[20%]  text-right">
          <LangSelector />
        </div>

        <div className="h-full ">
         
          {user && <TranslationHistory  userId={userId}/>}
         
    
        </div>

        {user ?
          <SubscriptionOption />
          :
          <div className="px-4 mb-14">
            <Link href="/auth/sign-up">
              <button className="bg-red-300 w-full h-12 rounded-2xl text-white text-lg hover:bg-red-400 mb-[10%]">無料登録</button>
            </Link>
          </div>
        }

</div>
      </SheetContent>

    </Sheet>


  )
}

export default HamburgerMenu
