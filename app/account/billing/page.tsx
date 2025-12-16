import { checkPlan } from '@/app/action'
import SubscriptionCancelButton from '@/components/SubscriptionCancelButton'

const page = async() => {
  const data = await checkPlan()
  // 日付の取得をより確実に
  const proUntil = data?.proUntil ? new Date(data.proUntil).toLocaleDateString() : '---'

  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-gray-50/50 p-4'>
      {/* メインカード */}
      <div className='w-full max-w-xl bg-white flex flex-col items-center border border-red-100 shadow-xl shadow-red-50/50 rounded-[2.5rem] p-8 md:p-12' >
        
        <div className='text-center mb-10'>
          <h1 className='text-3xl font-black text-gray-800 mb-2'>Billing Plan</h1>
          <p className='text-gray-400 text-sm'>Manage your subscription and billing</p>
        </div>

        {/* 情報エリア */}
        <div className='w-full bg-gray-50 rounded-3xl p-6 md:p-8 mb-10 space-y-6'>
          
          <div className='flex justify-between items-center border-b border-gray-200/60 pb-4'>
            <p className='text-gray-500 font-medium'>Current Plan</p>
            <div className='text-right'>
              <p className='text-xl font-bold text-red-500'>{data?.planName || 'FREE'}</p>
              <p className='text-[10px] text-gray-400 uppercase tracking-widest'>Subscription</p>
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <p className='text-gray-500 font-medium'>Valid Until</p>
            <div className='text-right'>
              <p className='text-xl font-bold text-gray-800'>{proUntil}</p>
              <p className='text-[10px] text-gray-400 uppercase tracking-widest'>Next Renewal</p>
            </div>
          </div>
          
        </div>

        {/* ボタンエリア */}
        <div className='w-full flex justify-center mt-8'>
          <SubscriptionCancelButton proUntil={proUntil}/>
        </div>

        <p className='mt-8 text-xs text-gray-400'>
          Securely processed by Stripe. Cancel anytime.
        </p>
      </div>
    </div>
  )
}

export default page