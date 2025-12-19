"use client"

import React, { useState } from 'react'
import axios from 'axios'
import { CheckCircle2 } from 'lucide-react'
import { useLangOpstion } from '@/lib/store/useLangOption'
import { LangType } from '@/lib/type/type'
import {PLANS_UI} from '@/app/constants/plansData'

const Plans = () => {
   const [selectedPlan, setSelectedPlan] = useState<""|"annual"|"monthly">("")
   const notSelected = selectedPlan===""
   const selectedLang = useLangOpstion((state)=>state.selectedLang) as LangType
   const t = PLANS_UI[selectedLang] || PLANS_UI.Japanese

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
              <h3 className="text-lg font-bold">{t.monthlyTitle}</h3>
              <p className="text-sm text-gray-500">{t.monthlySub}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">$3.99</div>
              <div className="text-sm text-gray-500">/month</div>
            </div>
          </div>
        </div>

        {/* Annual Plan  */}
        <div className={`border-2  rounded-3xl p-6  relative cursor-pointer hover:border-red-400 ${selectedPlan==="annual"&&"bg-red-50"}`} onClick={()=>setSelectedPlan("annual")}>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-400 text-white text-xs font-bold px-4 py-1 rounded-full">
            {t.bestValue}
          </div>
          <div className="flex items-center justify-between mb-3 ">
            <div>
              <h3 className="text-lg font-bold">{t.annualTitle}</h3>
              <p className="text-sm text-gray-500">{t.annualSub}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold ">$39.99</div>
              <div className="text-xs  font-semibold">Only $3.33/month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mb-6 space-y-2 bg-gray-50 p-5 rounded-lg">
        <h4 className="font-semibold mb-3">{t.proFeatures}</h4>
 
          
          <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500  mt-0.5" />
            <div>
              <p className="text-sm font-bold text-gray-700">{t.unlimitedTitle}</p>
              <p className="text-xs text-gray-500">{t.unlimitedDesc}</p>
            </div>
          </li>
          <li className="flex items-start gap-3 opacity-70">
            <CheckCircle2 className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-gray-700 italic">Coming Soon...</p>
              <p className="text-xs text-gray-400 font-medium">{t.comingSoonDesc}</p>
            </div>
          </li>
        </ul>
         
      
      </div>

       {/* Payment Button */}

      <button onClick={handlePayment} disabled={notSelected} className={`w-full ${notSelected? "bg-gray-400" : "bg-red-400"} text-white font-bold py-4 rounded-2xl hover:opacity-90 transition`}>
        Payments
      </button>
  
      </>
  )
}

export default Plans
