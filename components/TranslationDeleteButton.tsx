"use client"


import { deleteTranslationHistory } from "@/app/action"
import { useRouter } from "next/navigation"
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
import { Trash } from "lucide-react"

interface Props{
  id:string
}


const TranslationDeleteButton = ({ id }: Props ) => {
  const router = useRouter()

  const handleDelete = async () => {

      const result = await deleteTranslationHistory(id)
      if (result.success) {
        router.refresh()
      }else{
        alert("failed to delete transaction history")
      }
    
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
       
          <button className="z-10 h-full  px-3" ><Trash className="h-4 w-4 text-gray-500"/></button>
        
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