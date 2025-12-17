import { create } from 'zustand'
import { persist } from 'zustand/middleware'


interface State {
    selectedLang: string,
    selectKOR: () => void,
    selectENG: () => void,
    selectCHN: () => void,
    selectJPN: () => void
}

export const useLangOpstion = create<State>()(
    persist(
        (set) => ({
            selectedLang:  "Japanese",
            selectKOR: () => {
                set({ selectedLang: "Korean" })
            },
            selectENG: () => {
                set({ selectedLang: "English" })
            },
            selectCHN: () => {
                set({ selectedLang: "Chinese" })
            },
            selectJPN: () => {
                set({ selectedLang: "Japanese" })
            }
        }),
        {
            name: 'lang-storage'
        }
    ),

)