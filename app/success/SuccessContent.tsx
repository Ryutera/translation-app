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
      
      <section id="success" className='h-screen w-full flex flex-col items-center justify-center '>
        <div className='w-[40%] h-[50%]  flex items-center justify-center flex-col gap-2'>
         <CircleCheck className='text-green-400 h-20 w-20' />
        <p className='text-2xl font-bold my-5'>Payment Successful</p>
        <p>We appreciate your business!</p>
        <p> A confirmation email will be sent to {customer_details?.email}.</p>
        <p> If you have any questions, please email {'ourEmail@example.com '}</p>
        <Link href="/"> <Button className=' mt-10'>Home</Button></Link>
         
        </div>
      </section>
     
    )
  }
}

export default SuccessContent
