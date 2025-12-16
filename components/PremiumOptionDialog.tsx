
import Plans from './Plans'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'


const PremiumOptionDialog = () => {
  return (
      <DialogContent className="max-w-lg w-[95%] max-h-[95vh] overflow-y-auto ">
    <div className="p-3">
      <DialogHeader className="mb-6">
        <DialogTitle className="text-2xl font-bold text-center">
          Go Pro Unlimited
        </DialogTitle>
        <DialogDescription className="text-center">
          All features, unlimited access
        </DialogDescription>
      </DialogHeader>

     <Plans/>

     
     
    </div>
  </DialogContent>
  )
}

export default PremiumOptionDialog
