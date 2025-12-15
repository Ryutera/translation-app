
"use client"
import { CircleUserRoundIcon } from 'lucide-react'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog'
import { LogoutButton } from './logout-button'
import { Button } from './ui/button'
import AccountDeleteDialog from './AccountDeleteDialog'
import { checkPlan } from '@/app/action'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Props {
    email: string | undefined
}

const AccountInfo =  ({ email }: Props) => {
const [plan, setPlan] = useState<string>()
const router = useRouter()
 const [open, setOpen] = useState(false)
   
 useEffect(()=>{
    const init =async ()=>{
       const res = await checkPlan()
       setPlan(res)
    }
    init()
 },[])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <CircleUserRoundIcon className="ml-5 h-10 w-10 text-gray-600 hover:cursor-pointer" />
                </DialogTrigger>
                <DialogContent className="w-full">

                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <p className='font-bold text-xl my-8'>アカウント情報</p>

                        <p className='font-semibold'>一般</p>
                        <div className='flex flex-row justify-center justify-between items-center '>
                            <p >Email</p>
                            <p>{email}</p>
                        </div>
                        <div className='flex flex-row justify-center justify-between items-center mt-3'>
                            <p >Plan</p>
                            <p>{plan}</p>
                        </div>
                    </DialogHeader>

             {plan!=="FREE"&& <p onClick={()=>{router.push("/account/billing");setOpen(false)}} className='text-xs text-gray-500 text-right hover:cursor-pointer hover:text-gray-600 mt-1'>サブスクリプションを解除する</p>}
                    <hr className='h-1 mb-3' />


                    <div className='flex flex-col justify-center'>
                        <p className='font-semibold'>アカウント</p>
                        <div className='mt-3 flex flex-row justify-between items-center '>
                            <p>ログアウト</p>
                            <LogoutButton />
                        </div>

                        <div className='mt-3 flex flex-row justify-between items-center'>
                            <p>アカウント削除</p>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className='font-semibold bg-red-300 hover:bg-red-200'>アカウント削除</Button>
                                </DialogTrigger>
                                <AccountDeleteDialog/>
                            </Dialog>
                        </div>
                    </div>

                </DialogContent>
            </form>
        </Dialog>

    )
}

export default AccountInfo
