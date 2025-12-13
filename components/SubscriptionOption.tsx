
"use client"
import {
  Dialog,
  DialogTrigger,
} from "./ui/dialog"
import PremiumOptionDialog from './PremiumOptionDialog'
import Link from "next/link"
import { useAuthStore } from "@/lib/store/useAuthStore"


const SubscriptionOption = () => {
 const user = useAuthStore((state)=>state.user)

 
  return (

    user?
      <Dialog>
        < DialogTrigger asChild >
          <button className="mb-14 bg-red-300 w-[80%] mx-auto h-16 rounded-2xl text-white text-lg font-semibold hover:bg-red-400">
            View Plans
          </button>
        </DialogTrigger >

        <PremiumOptionDialog />

      </Dialog >
      :
     <div className="px-4 mb-14">
        <Link href="/auth/sign-up">
          <button className="bg-red-300 w-full h-12 rounded-2xl text-white text-lg hover:bg-red-400 mb-[10%]">無料登録</button>
        </Link>
      </div>

  )
}

export default SubscriptionOption
