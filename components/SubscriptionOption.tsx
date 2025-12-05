import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import Plans from './Plans'


const SubscriptionOption = () => {
  return (
      
      <Dialog>
  <DialogTrigger asChild> 
    <button className="mb-14 bg-red-300 w-[80%] mx-auto h-12 rounded-2xl text-white text-lg font-semibold hover:bg-red-400">
      View Plans
    </button>
  </DialogTrigger>
  
    <DialogContent className="max-w-lg w-[95%] max-h-[95vh] overflow-y-auto ">
    <div className="p-3">
      <DialogHeader className="mb-6">
        <DialogTitle className="text-2xl font-bold text-center">
          Go Pro Unlimited
        </DialogTitle>
        <DialogDescription className="text-center">
          All features, unlimited access
        </DialogDescription>
      </DialogHeader>

     <Plans/>

     
      <p className="text-xs text-center text-gray-500 mt-3">
        Cancel anytime during free trial
      </p>
    </div>
  </DialogContent>
</Dialog>
  )
}

export default SubscriptionOption
