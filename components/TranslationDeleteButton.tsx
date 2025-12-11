"use client"


import { deleteTranslationHistory } from "@/app/action"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"


const TranslationDeleteButton = ({ id }: { id: string }) => {
  const router = useRouter()

  const handleDelete = async () => {

      await deleteTranslationHistory(id)
      router.refresh()
    
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
       
          <button className="z-10 h-full  px-3" >...</button>
        
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure to delete it?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default TranslationDeleteButton 