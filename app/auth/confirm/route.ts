import { createUser } from "@/app/action";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);


  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";


  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      redirect(`/auth/error?error=${encodeURIComponent(error.message)}`);
    }

//bgにもユーザー情報を追加　(メール経由の場合)
    const { data: { user } } = await supabase.auth.getUser();
if (user?.id) await createUser(user.id);

    redirect(`${origin}${next}`);
  }

  
}