
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
import { useRouter } from 'next/navigation'
import { ACCOUNT_INFO } from '@/app/constants/accountInfoData'
import { useLangOpstion } from '@/lib/store/useLangOption'
import { LangType } from '@/app/constants/introductionData'

interface Props {
    email: string | undefined
}

const AccountInfo = ({ email }: Props) => {
    const [plan, setPlan] = useState<string>()
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const selectedLang = useLangOpstion((state) => state.selectedLang) as LangType

    useEffect(() => {
        const init = async () => {
            const res = await checkPlan()
            setPlan(res)
        }
        init()
    }, [])

    const t = ACCOUNT_INFO[selectedLang] || ACCOUNT_INFO.English


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <CircleUserRoundIcon className="ml-5 h-10 w-10 text-gray-600 hover:cursor-pointer" />
                </DialogTrigger>
                <DialogContent className="w-full">

                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <p className='font-bold text-xl my-8'>{t.accountInfo}</p>

                        <p className='font-semibold text-left mb-2'>{t.general}</p>
                        <div className='flex flex-row justify-center justify-between items-center '>
                            <p >{t.email}</p>
                            <p>{email}</p>
                        </div>
                        <div className='flex flex-row justify-center justify-between items-center mt-3'>
                            <p >{t.plan}</p>
                            <p>{plan}</p>
                        </div>
                    </DialogHeader>

                    {plan !== "FREE" && <p onClick={() => { router.push("/account/billing"); setOpen(false) }} className='text-xs text-gray-500 text-right hover:cursor-pointer hover:text-gray-600 mt-1'>{t.cancelSub}</p>}
                    <hr className='h-1 mb-3' />


                    <div className='flex flex-col justify-center'>
                        <p className='font-semibold'>{t.account}</p>
                        <div className='mt-3 flex flex-row justify-between items-center '>
                            <p>{t.logout}</p>
                            <LogoutButton />
                        </div>

                        <div className='mt-3 flex flex-row justify-between items-center'>
                            <p>{t.accountDelete}</p>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className='font-semibold bg-red-300 hover:bg-red-200'>{t.accountDelete}</Button>
                                </DialogTrigger>
                                <AccountDeleteDialog />
                            </Dialog>
                        </div>
                    </div>

                </DialogContent>
            </form>
        </Dialog>

    )
}

export default AccountInfo
