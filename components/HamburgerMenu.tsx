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
import { checkIfPremium } from "@/app/action"
import AccountInfo from "./AccountInfo"
import HamburgerHeader from "./HamburgerHeader"

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
        <div className="flex flex-col justify-between h-full sm:pt-[25%] sm:pt-[30%]">

          <HamburgerHeader userId={userId} email={email}/>
          <TranslationHistory userId={userId} />
          <SubscriptionOption />
            

        </div>
      </SheetContent>

    </Sheet>


  )
}

export default HamburgerMenu