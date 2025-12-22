"use client"
import AccountInfo from './AccountInfo'
import LangSelector from './LangSelector'
import { useAuthStore } from '@/lib/store/useAuthStore'


const HamburgerHeader = () => {
    const user = useAuthStore((state)=>state.user)
    const email = user?.email
    

  return (
    <div className="flex justify-between items-center gap-6 px-4 ">
            {user &&<AccountInfo  email={email} />}
            <div className='w-28'>
 <LangSelector />
            </div>
           
          </div>
  )
}

export default HamburgerHeader
