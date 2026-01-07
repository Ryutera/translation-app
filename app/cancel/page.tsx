import { Button } from '@/components/ui/button'
import { XCircle } from 'lucide-react'
import Link from 'next/link'



const page = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Decorative Icon */}
        <div className="mb-8 flex justify-center">

          <div className="p-5 bg-gray-50 rounded-full">
            <XCircle className="w-16 h-16 text-gray-400" />
          </div>

        </div>

        {/* Text Content */}
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Payment Cancelled
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          The transaction was not completed. <br />
          No charges were made. You can try again or change your plan whenever you're ready.
        </p>

        <Link href="/">
          <Button className='bg-red-300 hover:bg-red-400'>Back to Top</Button>
        </Link>

      </div>
    </div>
  )
}

export default page
