//after login we will need user info in multiple areas such as write home etc so we will store the user info here.
//import { createContext } from "react";


import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    //checks for existence of user FYI goto to Inspect->application->localstorage
    const [currentUser, setCurrentUser]=useState(JSON.parse(localStorage.getItem("user") || null))

    const login=async(inputs)=>{
        const res=await axios.post("http://localhost:7000/api/auth/login",inputs)
        setCurrentUser(res.data);
    };
    const logout=async (inputs)=>{
        await axios.post("http://localhost:7000/api/auth/logout");
        setCurrentUser(null);
    };

    //Whenever we change the current user the localstorage will get updated.
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>
        {children}
        </AuthContext.Provider>
    );
};