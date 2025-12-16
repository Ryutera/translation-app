"use client"
import { cancelSubscription } from '@/app/action'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'


interface Props{
proUntil:string | undefined
}
const SubscriptionCancelButton = ({proUntil}:Props) => {
  return (
    <Dialog>
  <DialogTrigger asChild>
    <div>
      <Button className="bg-red-300 hover:bg-red-400" >Cancel Subscription</Button>
    </div>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        Your Pro benefits remain active until the end of your billing period on {proUntil}
      </DialogDescription>
      <Button className='mt-5 bg-red-300 hover:bg-red-400' onClick={cancelSubscription}>Confirm</Button>
    </DialogHeader>
  </DialogContent>
</Dialog>
    
  )
}

export default SubscriptionCancelButton
