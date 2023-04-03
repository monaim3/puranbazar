import React, { createContext, useEffect, useState } from 'react';

import  {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, sendPasswordResetEmail, updateProfile } from 'firebase/auth'
import app from './../Firebase/Firebase.config';

export const AuthContex = createContext()

const auth = getAuth(app);

const Googleprovider = new GoogleAuthProvider();
const UserContext = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true);
    const createuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, Googleprovider)
    }
    const userUpdate=(profile)=>{
       return  updateProfile(auth.currentUser,profile)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const resetmethod = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();

    }, [])
    const authInfo = { user,userUpdate, loading, createuser, signIn, googleSignIn, logOut, resetmethod }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>

    );
};

export default UserContext;