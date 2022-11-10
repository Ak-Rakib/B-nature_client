import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import  { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'



const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, getUser] = useState(null)
    const [loader, setLoader] = useState(true)


    const manualSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const googleSignUp = (provider) => {
        return signInWithPopup(auth, provider);
    }


    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
       const unSubscriber =  onAuthStateChanged(auth, currentUser => {
            getUser(currentUser)
            setLoader(false);
        });
        return () => {
            unSubscriber();
        }
    },[])

    const Info = {
        user,
        loader,
        manualSignUp,
        googleSignUp,
        logIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;