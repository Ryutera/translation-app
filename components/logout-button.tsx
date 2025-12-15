"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();

    router.refresh();
  };

  return <Button onClick={logout} className="bg-red-300 hover:bg-red-200 font-semibold" >Logout</Button>;
}
