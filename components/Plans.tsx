"use client"

import React, { useState } from 'react'
import axios from 'axios'

const Plans = () => {
   const [selectedPlan, setSelectedPlan] = useState<""|"anual"|"monthly">("")
   const notSelected = selectedPlan===""

async function handlePayment(){
    const res = await axios.post("/api/checkout_sessions",{
      selectedPlan:selectedPlan
    })

  const url = res.data.url

   if (url) {
    window.location.href = url
  }

   }

  return (
    <>
     {/* Plan Cards */}
      <div className="space-y-4 mb-6">
        {/* Monthly Plan */}
        <div className={`border-2 border-gray-200 rounded-3xl p-6 mb-7 hover:border-red-400 transition cursor-pointer  ${selectedPlan==="monthly"&&"bg-red-50"}`} onClick={()=>setSelectedPlan("monthly")}>
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

        {/* Annual Plan  */}
        <div className={`border-2  rounded-3xl p-6  relative cursor-pointer hover:border-red-400 ${selectedPlan==="anual"&&"bg-red-50"}`} onClick={()=>setSelectedPlan("anual")}>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-400 text-white text-xs font-bold px-4 py-1 rounded-full">
            Best Value!
          </div>
          <div className="flex items-center justify-between mb-3 ">
            <div>
              <h3 className="text-lg font-bold">Annual Plan</h3>
              <p className="text-sm text-gray-500">Save 2 months</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold ">$99.99</div>
              <div className="text-xs  font-semibold">Only $8.33/month</div>
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

       {/* Payment Button */}

      <button onClick={handlePayment} disabled={notSelected} className={`w-full ${notSelected? "bg-gray-400" : "bg-red-400"} text-white font-bold py-4 rounded-2xl hover:opacity-90 transition`}>
        Payments
      </button>
  
      </>
  )
}

export default Plans
