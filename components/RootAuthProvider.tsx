"use client"

import { useAuthStore } from "@/lib/store/useAuthStore"
import { useEffect } from "react"

// ルートでラップ、コンポジションパターンなのでchildrenにサーバーコンポーネントを配置可能
const RootAuthProvider = ({ children }: { children: React.ReactNode }) => {
    const initializeAuth = useAuthStore((state)=>state.initializeAuth)
    useEffect(()=>{initializeAuth()},[])
  return (
    <>
      {children}
    </>
  )
}

export default RootAuthProvider
