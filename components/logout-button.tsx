"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useLoginStatus } from "@/lib/store/useLoginStatus";



export function LogoutButton() {
  const setToUnlogin = useLoginStatus((state)=>state.setToUnlogin)
  const loginState = useLoginStatus((state)=>state.loginStatus)

  console.log(loginState,"ログ")

  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setToUnlogin()
    router.refresh();
  };

  return <Button onClick={logout} className="bg-red-300 hover:bg-red-200 font-semibold" >Logout</Button>;
}
