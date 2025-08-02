import { createContext } from "react";

 export const CountContext = createContext()
 const UserName =  'Dynamic'
 const age = 18
 const Gmail = 'ab,aghaku'

export const CountProvider = ({children})=>{
return(
    <CountContext.Provider value={{UserName, age, Gmail}}>
        {children}
    </CountContext.Provider>
)
}

