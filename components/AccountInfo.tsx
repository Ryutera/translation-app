
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

interface Props {
    email: string | undefined
}

const AccountInfo =  ({ email }: Props) => {
const [plan, setPlan] = useState<string>()
   
 useEffect(()=>{
    const init =async ()=>{
       const res = await checkPlan()
       setPlan(res)
    }
    init()
 },[])

    return (
        <Dialog>
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


                    <hr className='my-5' />


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
