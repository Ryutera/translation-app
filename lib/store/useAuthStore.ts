
import { create } from "zustand";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client"; 

interface AuthState {
  user: User | null; 

  initializeAuth: () => void; 
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null, 
  
  initializeAuth: () => {
    const supabase = createClient();
    
   
    supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN'){
         console.log("サインイン")
set({ user: session?.user ?? null });
    }else if (event === 'SIGNED_OUT'){
      console.log("サインアウト")
set({ user:  null });
    }
      
    });
    
  },
}));