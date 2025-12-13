"use client"
import React from 'react'
import { 
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose 
 } from './ui/dialog'
import { Button } from './ui/button'
import { deleteAccount } from '@/app/action'
import { useRouter } from 'next/navigation'


const AccountDeleteDialog = () => {
    const router = useRouter()

    const handleDelete =async()=>{
        const result = await deleteAccount()
        if (result?.success) {
          // deletion succeeded
          window.location.reload()
        } else {
          // show error to user (could be replaced with UI toast)
          alert(`Failed to delete account`)
        }
    }

  return (
     <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure to delete your account?</DialogTitle>
      <DialogDescription className='mt-7'>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
     <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className='bg-red-400 hover:bg-red-500' onClick={handleDelete}>Delete</Button>
          </DialogFooter>
  </DialogContent>
  )
}

export default AccountDeleteDialog
