import { create } from "zustand";

interface State {
    loginStatus:boolean
     setToLogin:()=>void
    setToUnlogin:()=>void
}


export const useLoginStatus=create<State>((set)=>({
    loginStatus:false,
    setToLogin:()=>set(()=>({loginStatus:true})),
    setToUnlogin:()=>set(()=>({loginStatus:false})),
}))