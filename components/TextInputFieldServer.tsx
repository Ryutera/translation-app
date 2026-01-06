
import { checkPlan } from '@/app/action'
import TextInputField from './TextInputField'
import getUserId from '@/lib/supabase/getUserId'

const TextInputFieldServer = async () => {

  const userId = await getUserId()
  const isLoggedIn = Boolean(userId);

  const res = await checkPlan()

  const isPremium = res?.proUntil?.getTime()! > Date.now()


  return (
    <>
      <TextInputField isLoggedIn={isLoggedIn} isPremium={isPremium} />
    </>
  )
}

export default TextInputFieldServer
