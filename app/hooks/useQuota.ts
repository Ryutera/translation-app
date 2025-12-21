"use client"
import React, { useEffect, useState } from 'react'
import { checkQuotaToday } from '../action'
import { useAuthStore } from '@/lib/store/useAuthStore';

const useQuota = () => {
    //無料ログインユーザー用の利用回数
    const DAILY_LIMIT = 10;

    const [remaining, setRemaining] = useState<number>(3);
    const [isLimitReached,setIsLimitReached] = useState(false)
    const user = useAuthStore((state)=>state.user)
    const userId = user?.id


    useEffect(() => {
        const init = async () => {
            if (userId) {
                try {
               const used = await checkQuotaToday(userId)
                const rest = Math.max(DAILY_LIMIT - used, 0);
                rest > 0 ? setRemaining(rest): setIsLimitReached(true) 
               
                } catch (error) {
                    console.log(error)
                }           
                
            } else {
                const data = localStorage.getItem("usageCount")
                // ローカルストレージにデータがない場合に初期値の3を入れる
                if (!data) {
                    localStorage.setItem("usageCount", JSON.stringify(3))
                    setRemaining(3)
                   
                    setIsLimitReached(false);

                } else {
                    const count = JSON.parse(data)
                 
                    setRemaining(count)
                   
                   
                    if (count < 1) {
                         setIsLimitReached(true);
                    } else {
                         setIsLimitReached(false); 
                    }
                }
            }
        }
        init()
    }, [userId])
   


useEffect(() => {
    //残り0になった直後に値を切り替える
  if (remaining <= 0) {
    setIsLimitReached(true);
  }else{
    setIsLimitReached(false)
  }
}, [remaining]);

    const decreaseCount = async () => {
       
        if (userId) {
       setRemaining(prev => Math.max(prev - 1, 0))

        } else {

            const data = localStorage.getItem("usageCount")
            let count = JSON.parse(data!)
            if (count <= 0) {
             setIsLimitReached(true)
                return
            }else{
            count -= 1
            setRemaining(count)
            localStorage.setItem("usageCount", count)
            }
        }
    }


    return { decreaseCount,remaining,isLimitReached }
}

export default useQuota