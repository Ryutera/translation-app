import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { createClient } from "@/lib/supabase/server"

import {Menu } from "lucide-react"
import SubscriptionOption from "./SubscriptionOption"

import Link from "next/link"
import LangSelector from "./LangSelector"
import { DialogHeader } from "./ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import TranslationHistory from "./TranslationHistory"
import { checkIfPremium } from "@/app/action"
import AccountInfo from "./AccountInfo"



const HamburgerMenu = async () => {

  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;
  const email = user?.email
  const userId = user?.sub
  let ifPremium
  if (userId) {
  ifPremium = await checkIfPremium(userId)
  }

  return (

    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>

      <DialogHeader className="sr-only">
        <DialogTitle />
      </DialogHeader>



      <SheetContent>
        <div className="flex flex-col justify-between h-full ">

          <div className="flex justify-between items-center gap-6 px-4 mt-[20%]  text-right">
            {userId && 
            <AccountInfo userId={userId} ifPremium={ifPremium}  email={email}/>}
            <LangSelector />
          </div>

          <div className="h-full ">

            {user ? <TranslationHistory userId={userId}/> :
              <div className="flex flex-col items-center justify-center h-[80%] mt-10 px-6 text-center">
               ログインするとここから翻訳履歴にアクセスできます
              </div>
            }


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
