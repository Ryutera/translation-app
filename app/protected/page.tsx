// app/protected/page.tsx
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

// すでにログイン済みかどうかチェック
export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();


  if (!user) {
    redirect("/auth/login"); 
  }

 
  redirect("/"); 
}
