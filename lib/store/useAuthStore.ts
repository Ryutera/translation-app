
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

      set({ user: session?.user ?? null });
    });
    
    // supabase.auth.getSession().then(({ data: { session } }) => {
    //     set({ user: session?.user ?? null });
    // });
  },
}));