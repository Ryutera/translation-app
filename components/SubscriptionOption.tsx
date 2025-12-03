import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"

const SubscriptionOption = () => {
  return (
      
      <Dialog>
  <DialogTrigger asChild> 
    <button className="mb-14 bg-red-300 w-[80%] mx-auto h-12 rounded-2xl text-white text-lg font-semibold hover:bg-red-400">
      View Plans
    </button>
  </DialogTrigger>
  
  <DialogContent className="max-w-lg w-[95%] max-h-[90vh] overflow-y-auto p-0">
    <div className="p-6">
      <DialogHeader className="mb-6">
        <DialogTitle className="text-2xl font-bold text-center">
          Go Pro Unlimited
        </DialogTitle>
        <DialogDescription className="text-center">
          All features, unlimited access
        </DialogDescription>
      </DialogHeader>

      {/* Plan Cards */}
      <div className="space-y-4 mb-6">
        {/* Monthly Plan */}
        <div className="border-2 border-gray-200 rounded-3xl p-6 hover:border-red-400 transition cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold">Monthly Plan</h3>
              <p className="text-sm text-gray-500">Cancel anytime</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">$9.99</div>
              <div className="text-sm text-gray-500">/month</div>
            </div>
          </div>
        </div>

        {/* Annual Plan - Popular */}
        <div className="border-2 border-red-400 rounded-3xl p-6 bg-red-50 relative cursor-pointer">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-400 text-white text-xs font-bold px-4 py-1 rounded-full">
            Best Value!
          </div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold">Annual Plan</h3>
              <p className="text-sm text-gray-500">Save 2 months</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-red-500">$99.99</div>
              <div className="text-xs text-red-500 font-semibold">Only $8.33/month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mb-6 space-y-2">
        <h4 className="font-semibold mb-3">Pro Features</h4>
        {[
          'Unlimited translations',
          'All politeness levels',
          'Detailed grammar explanations',
          'Voice playback',
          'Ad-free experience'
        ].map((feature, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
              ✓
            </div>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="w-full bg-red-400 text-white font-bold py-4 rounded-2xl hover:opacity-90 transition">
        Start 7-Day Free Trial
      </button>
      
      <p className="text-xs text-center text-gray-500 mt-3">
        Cancel anytime during free trial
      </p>
    </div>
  </DialogContent>
</Dialog>
  )
}

export default SubscriptionOption
