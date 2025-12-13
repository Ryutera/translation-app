"use client"
import AccountInfo from './AccountInfo'
import LangSelector from './LangSelector'
import { useAuthStore } from '@/lib/store/useAuthStore'

interface Props {
    userId?: string
    email?:string
}

const HamburgerHeader = ({userId, email}:Props) => {
    const user = useAuthStore((state)=>state.user)

  return (
    <div className="flex justify-between items-center gap-6 px-4  ">
            {user &&
              <AccountInfo userId={userId} email={email} />}
            <LangSelector />
          </div>
  )
}

export default HamburgerHeader
