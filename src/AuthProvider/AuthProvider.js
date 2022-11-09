import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import getAuth, { onAuthStateChanged } from 'firebase/auth'

const auth = getAuth(app);
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, getUser] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
       const unSubscriber =  onAuthStateChanged(auth, currentUser => {
            getUser(currentUser)
            setLoader(false);
        });
        return () => {
            unSubscriber();
        }
    },[])

    const authInfo = {
        user,
        loader
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;