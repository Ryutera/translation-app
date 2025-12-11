import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'
import React from 'react'

interface Props {
  session_id: string | undefined
}

const SuccessContent = async({session_id}:Props) => {

      if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    // customer_details: { email:any }
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
   
    return (
      
      <section id="success" className='h-screen w-full flex flex-col items-center justify-center'>
        <p>
          We appreciate your business! A confirmation email will be sent to{' '}
          {/* {customerEmail}. If you have any questions, please email{' '} */}
        </p>
        <a href="mailto:orders@example.com">orders@example.com</a>.
      </section>
     
    )
  }
}

export default SuccessContent
