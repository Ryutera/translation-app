import {create} from 'zustand'

interface State{
selectedLang:string,
selectKOR:()=>void,
selectENG:()=>void
selectCHN:()=>void
selectJPN:()=>void
}

export const useLangOpstion = create<State>((set)=>({
selectedLang : "English",
selectKOR: ()=>set(()=>({selectedLang:"Korean"})),
selectENG: ()=>set(()=>({selectedLang:"English"})),
selectCHN: ()=>set(()=>({selectedLang:"Chinese"})),
selectJPN: ()=>set(()=>({selectedLang:"Japanese"}))
}))