import { useContext, createContext, ReactNode } from "react";

const ShoppingCartContext = createContext({})

export function useShoppingCard(){
    return useContext(ShoppingCartContext)
}

type ShoppingCartProviderProps = {
    children: ReactNode
}

export function ShoppingCardProvider({children}: ShoppingCartProviderProps){
    return <ShoppingCartContext.Provider value={{}}>
        {children}
    </ShoppingCartContext.Provider>
}