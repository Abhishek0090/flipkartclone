import { Children, createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children})=>{

    const [userAccount, setUserAccount] = useState(null);

    return (
        <DataContext.Provider value={{userAccount,setUserAccount}}>
            {children}
        </DataContext.Provider>
    )

}