import { Button } from '@/components/ui/button'
import { stripe } from '@/lib/stripe'
import { CircleCheck } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'


interface Props {
  session_id: string | undefined
}


const SuccessContent = async({session_id}:Props) => {

      if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    customer_details } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
   
    return (
      
      <section id="success" className="min-h-screen w-full flex flex-col items-center justify-center bg-[#ffd1d112] px-4">
      <div className="w-full max-w-md md:max-w-lg bg-white p-8 md:p-12 rounded-3xl shadow-sm border  flex items-center justify-center flex-col text-center transition-all">
        
       
        <div className="mb-6">
          <CircleCheck className="text-green-400 h-16 w-16 md:h-20 md:w-20 animate-in zoom-in duration-500" />
        </div>

       
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">
          Payment Successful
        </h2>
        
        <p className="text-gray-600 font-medium mb-6">
          We appreciate your business!
        </p>

       
        <div className="space-y-3 text-sm md:text-base text-gray-500 leading-relaxed mb-8">
          <p>
            A confirmation email will be sent to:
            <span className="block font-bold text-gray-800 break-all">
              {customer_details?.email || "your email address"}
            </span>
          </p>
          
          
        </div>

         <Link href="/"> <Button className=' mt-10'>Home</Button></Link>
         

      </div>
    </section>
     
    )
  }
}

export default SuccessContent
