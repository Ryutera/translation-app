"use client"
import { useLoginStatus } from '@/lib/store/useLoginStatus'
import AccountInfo from './AccountInfo'
import LangSelector from './LangSelector'

interface Props {
    userId?: string
    email?:string
}

const HamburgerHeader = ({userId, email}:Props) => {
    const loginStatus = useLoginStatus((state)=>state.loginStatus)
  return (
    <div className="flex justify-between items-center gap-6 px-4  ">
            {loginStatus &&
              <AccountInfo userId={userId} email={email} />}
            <LangSelector />
          </div>
  )
}

export default HamburgerHeader
