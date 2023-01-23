import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
export const AuthContext=createContext()
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
     const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signUp=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const updateUser=(userInfo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,userInfo)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
             setUser(currentUser)
             setLoading(false)
         })
         return ()=>unsubscribe()
     },[])


     
    const authInfo={
        createUser,
        user,
        signUp,
        logOut,
        updateUser,
        loading,
        googleSignIn
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;