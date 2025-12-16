


import { checkPlan } from '@/app/action'
import TextInputField from './TextInputField'
import getUserId from '@/lib/supabase/getUserId'

const   TextInputFieldServer = async() => {

    const userId = await getUserId()
    if (!userId) {
      return 
    }

    let ifPremium

       const res  = await checkPlan()
       if (!res) {
        return 
       }

       //キャンセルした場合でも期限まで有効なので現在の時刻が期限よりも前か後で課金ユーザーかどうかを判定
       ifPremium = res?.proUntil?.getTime()! > Date.now() 
    
   
  return (
    <>
    <TextInputField userId={userId} ifPremium={ifPremium} />
    </>
  )
}

export default   TextInputFieldServer
