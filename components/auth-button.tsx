"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { LogoutButton } from "./logout-button";
import { useAuthStore } from "@/lib/store/useAuthStore";


export function AuthButton() {
const user = useAuthStore((state)=>state.user)

   return user? (
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

