


import { checkPlan } from '@/app/action'
import TextInputField from './TextInputField'
import getUserId from '@/lib/supabase/getUserId'

const   TextInputFieldServer = async() => {

    const userId = await getUserId()

    let ifPremium
    if (userId) {
       const res  = await checkPlan()
       ifPremium = res!== "FREE"
    }
   
  return (
    <>
    <TextInputField userId={userId}  ifPremium={ifPremium}/>
    </>
  )
}

export default   TextInputFieldServer
