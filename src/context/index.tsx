'use client';
import React, { createContext, useState, useContext } from 'react';
// type Context = {

// }

const AppContext = createContext<any>(undefined);

export function AppWrapper({children}:{
    children: React.ReactNode
}){
    let [state, setState] = useState({
        hello:'Context-world'
    });
    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}