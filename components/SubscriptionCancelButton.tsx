"use client"
import { cancelSubscription } from '@/app/action'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'


interface Props{
proUntil:string | undefined
}
const SubscriptionCancelButton = ({proUntil}:Props) => {

  const handleCancel = async () => {
    const res = await cancelSubscription()
    
    if (res.alreadyCancelled) {
        alert("Your cancellation has already been scheduled. You may continue to use the service until the end date.")
       
    } else if (res.success) {
        alert("Your cancellation request has been processed.")
    }
}

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
      <Button className='mt-5 bg-red-300 hover:bg-red-400' onClick={handleCancel}>Confirm</Button>
    </DialogHeader>
  </DialogContent>
</Dialog>
    
  )
}

export default SubscriptionCancelButton
