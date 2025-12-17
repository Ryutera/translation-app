import { create } from 'zustand'
import { persist } from 'zustand/middleware'


interface State {
    selectedLang: string,
    setLang: (lang:string) => void,
}

export const useLangOpstion = create<State>()(
    persist(
        (set) => ({
            selectedLang:  "Japanese",
            setLang: (lang:string) => {
                set({ selectedLang: lang })
            }
        }),
        {
            name: 'lang-storage'
        }
    ),

)