// app/protected/page.tsx
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import axios from "axios";
// すでにログイン済みかどうかチェック
export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();


// メールを踏んでここに遷移
  if (!user) {
    redirect("/auth/login"); 
  }

 
  redirect("/"); 
}
