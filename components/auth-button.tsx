"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { LogoutButton } from "./logout-button";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export function AuthButton() {
 const [user,setUser] = useState<any>(null)
 

 //ログイン状態に応じたボタンの即時更新のため
 useEffect(()=>{
   const supabase = createClient()

    // 💡 認証状態の変化を監視するリスナーを設定
   supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
          // ログインまたは初期セッション時
          setUser(session?.user ?? null)
        } else if (event === 'SIGNED_OUT') {
          // ログアウト時
          setUser(null)
        }
      }
    )
 },[])

 
 
  return user ? (
    <div className="flex items-center gap-4">
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/auth/login">Login</Link>
      </Button>
      
    </div>
  );
}

