import { create } from 'zustand';
export const useHeaderStore = create(set => ({
    hoverIndex: -2,
    setHoverIndex: (v:number)=>set((state:any)=>({
        hoverIndex: v
    }))
}))