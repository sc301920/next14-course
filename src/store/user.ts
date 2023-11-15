import { create } from 'zustand';
export const  useUserStore = create(set => ({
    user: {
        name: 'storename'
    },
    setUser: (newuser: any) => set((state:any)=>({
        user: { ...state.user, ...newuser }
    })),
    fetchUser: async()=>{
        const response = await fetch('/api/user');
        const fetchUser = await response.json()
        set({user: fetchUser})
    }
}))