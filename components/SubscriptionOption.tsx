import React from 'react'
import {
  Dialog,
  DialogTrigger,
} from "./ui/dialog"
import Plans from './Plans'
import PremiumOptionDialog from './PremiumOptionDialog'


const SubscriptionOption = () => {
  return (
      
      <Dialog>
  <DialogTrigger asChild> 
    <button className="mb-14 bg-red-300 w-[80%] mx-auto h-16 rounded-2xl text-white text-lg font-semibold hover:bg-red-400">
      View Plans
    </button>
  </DialogTrigger>
  
  <PremiumOptionDialog/>
  
</Dialog>
  )
}

export default SubscriptionOption
