

import { checkIfPremium } from '@/app/action'
import TextInputField from './TextInputField'
import getUserId from '@/lib/supabase/getUserId'

const   TextInputFieldServer = async() => {

    const userId = await getUserId()



    let ifPremium
    if (userId) {
       ifPremium = await checkIfPremium(userId)
    }
   
  return (
    <>
    <TextInputField userId={userId}   ifPremium={ifPremium}/>
    </>
  )
}

export default   TextInputFieldServer
