"use client"
import React, { useEffect, useState } from 'react'
import { checkQuotaToday } from '../action'

const useQuota = (userId: string|undefined) => {
    //無料ログインユーザー用の利用回数
    const DAILY_LIMIT = 10;

    const [remaining, setRemaining] = useState<number | null>(null);
    const [isLimitReached,setIsLimitReached] = useState(false)
  


    useEffect(() => {
        const init = async () => {
            if (userId) {
                const count = await checkQuotaToday(userId)
                setRemaining(DAILY_LIMIT - count)
            } else {
                const data = localStorage.getItem("usageCount")
                // ローカルストレージにデータがない場合に初期値の3を入れる
                if (!data) {
                    localStorage.setItem("usageCount", JSON.stringify(3))
                    setRemaining(3)

                } else {
                    const count = JSON.parse(data)
                    count <= 0 ? setIsLimitReached(true) : setRemaining(count)
                }
            }
        }
        init()
    }, [])



    const decreaseCount = async () => {
       
        if (userId) {
            const used = await checkQuotaToday(userId)
            setRemaining(DAILY_LIMIT - used)
        } else {

            const data = localStorage.getItem("usageCount")
            let count = JSON.parse(data!)
            if (count <= 0) {
             setIsLimitReached(true)
                return
            }
            count -= 1
            setRemaining(count)
            localStorage.setItem("usageCount", count)

        }
    }


    return { decreaseCount,remaining,isLimitReached }
}

export default useQuota
