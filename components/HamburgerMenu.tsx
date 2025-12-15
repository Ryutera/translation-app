import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import SubscriptionOption from "./SubscriptionOption"
import { DialogHeader } from "./ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import TranslationHistory from "./TranslationHistory"
import HamburgerHeader from "./HamburgerHeader"
import { checkPlan } from "@/app/action"

const HamburgerMenu = async () => {

  let ifPremium
  const res = await checkPlan()
  ifPremium = res==="FREE" ? false : true

  
  return (

    <Sheet >
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>

      <DialogHeader className="sr-only">
        <DialogTitle />
      </DialogHeader>



      <SheetContent>
        <div className="flex flex-col justify-between  h-full pt-[30%] ">

          <HamburgerHeader/>
          <TranslationHistory/>
          <SubscriptionOption ifPremium={ifPremium}/>
            

        </div>
      </SheetContent>

    </Sheet>


  )
}

export default HamburgerMenu