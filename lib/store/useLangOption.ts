import {create} from 'zustand'

interface State{
selectedLang:string,
selectKOR:()=>void,
selectENG:()=>void
selectCHN:()=>void
}

export const useLangOpstion = create<State>((set)=>({
selectedLang : "English",
selectKOR: ()=>set(()=>({selectedLang:"Korean"})),
selectENG: ()=>set(()=>({selectedLang:"English"})),
selectCHN: ()=>set(()=>({selectedLang:"Chinese"})),
}))