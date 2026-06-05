import React, { children } from 'react'

import {useContext, useState, createContext, useEffect} from 'react';

const AuthContext = createContext();


export const AuthProvider =({children}) =>{
const [user, setUser] = useState(null);
const[Token, setToken] = useState(localStorage.getItem("token"));
const [loading, setLoading]= useState(true);


useEffect(()=>{

    if(Token){

    const storedUser = localStorage.getItem("user");

    if(storedUser){
        setUser(JSON.parse(storedUser));
    }
    setLoading(false);
}
}, [Token]);

const login = (userData, authToken)=>{
    setUser(userData);
    setToken(authToken);
    localStorage.setItem("token", authToken)
    localStorage.getItem("user", JSON.stringify(setData));

}

const logout =()=>{
    setUser(null);
    setToken(null)
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}

return(
<AuthContext.Provider value={{user,Token, loading, login, logout}}>
{children}
</AuthContext.Provider>

)
};

export const useAuth =() => useContext(AuthContext);
