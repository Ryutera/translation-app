import { checkPlan } from '@/app/action'
import SubscriptionCancelButton from '@/components/SubscriptionCancelButton'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = async() => {
  const data = await checkPlan()
  const proUntil = data?.proUntil?.toLocaleDateString()
  return (
    <div className='h-screen w-full flex justify-center items-center'>

    <div className='h-[60%] w-[50%] flex justify-center items-center flex-col border shadow border-red-200 rounded-2xl' >
      <p className='mt-5 text-2xl '>あなたのプラン</p>

      <div className='justify-center items-center h-[40%] w-[70%] mt-8'>

        <div className='flex justify-between px-14 pt-10 text-lg'>
        <p>Plan</p>
        <p>{data?.planName}</p>      
        </div>


        <div className='flex justify-between px-14 pt-10 text-lg'>
        <p>Valid Until</p>
        <p>{proUntil}</p>      
        </div>
          
      </div>

     <SubscriptionCancelButton proUntil={proUntil}/>
      
    </div>

    </div>
  )
}

export default page
