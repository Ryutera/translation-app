
import React from 'react'
import Plans from './Plans'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'


const PremiumOptionDialog = () => {
  return (
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
  )
}

export default PremiumOptionDialog
