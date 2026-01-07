"use client"
import React, { useEffect, useState } from 'react'
import { checkQuotaToday } from '../action'
import { useAuthStore } from '@/lib/store/useAuthStore';

const useQuota = () => {

    const [remaining, setRemaining] = useState<number | null>(null);
    const [isLimitReached, setIsLimitReached] = useState(false)
    const user = useAuthStore((state) => state.user)
    const userId = user?.id
    const isLoggedIn = Boolean(userId);




    // 残り回数の判定及び利用制限に達したかの判定
    useEffect(() => {
        const init = async () => {
            if (isLoggedIn) {
                try {
                    const res = await checkQuotaToday()
                    if (res?.status === "limit_reached") {
                        setRemaining(0)
                        setIsLimitReached(true)
                        return
                    }
                    setRemaining(res?.remaining!)
                    setIsLimitReached(res?.remaining! <= 0)

                } catch (error) {
                    console.log(error)
                }

            } else {
                const data = localStorage.getItem("usageCount")
               
                const Trial_Usage = 3
                if (!data) {
                    localStorage.setItem("usageCount", JSON.stringify(Trial_Usage))
                    setRemaining(Trial_Usage)

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
    }, [isLoggedIn])



    useEffect(() => {
        if (remaining === null) return;
        setIsLimitReached(remaining <= 0);
    }, [remaining]);


    const decreaseCount = async () => {
        if (remaining === null) return;

        if (isLoggedIn) {
            setRemaining(prev => Math.max(prev! - 1, 0))

        } else {

            const data = localStorage.getItem("usageCount")
            let count = JSON.parse(data!)
            if (count <= 0) {
                setIsLimitReached(true)
                return
            } else {
                count -= 1
                setRemaining(count)
                localStorage.setItem("usageCount", count)
            }
        }
    }


    return { decreaseCount, remaining, isLimitReached, setIsLimitReached }
}

export default useQuota