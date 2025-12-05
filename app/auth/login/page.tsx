import { LoginForm } from "@/components/login-form";
import getUserId from "@/lib/supabase/getUserId";

export default async function Page() {
     const userId = await getUserId()
    if (userId) {
       console.log(userId!,"ユーザー")
    }
   
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
