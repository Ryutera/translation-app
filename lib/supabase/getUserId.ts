
import { createClient } from "@/lib/supabase/server"

const getUserId = async()=>{
 
 
 const supabase = await createClient()
  const user = await supabase.auth.getUser()
  const userId = user?.data?.user?.id
  return userId
}
 

export default getUserId


