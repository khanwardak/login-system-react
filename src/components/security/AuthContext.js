import { createContext, useContext, useState } from "react";


// for access the AuthContext on other components we export it
export const AuthContext = createContext()

// this method provide context to all its children

// created a hook fo AuthContext to easy use on onther components

// const authContext = useContext(AuthContext);

export const useAuth =() =>useContext(AuthContext);


export default function AuthProvider ({children}){
    const [number, setNumber] = useState(15);
    const [isAuthenticated, setAuthenticated] = useState(false)
    // console.log(isAuthenticated)
    
    return(
        // pass the number value to all its child components
        
        <AuthContext.Provider value={{number,isAuthenticated,setAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}