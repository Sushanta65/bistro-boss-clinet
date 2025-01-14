import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';
import SignIn from '../pages/SignIn';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState([])


    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(data => {
            console.log(data.user)
        })
        .catch(error => console.log(error))
    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(data => {
            console.log(data.user)
            setUser(data.user)
        })
        .catch(error => console.log(error.message))
    }

    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return (() => {
            return unsubsribe()
        })
    }, [])

    const authInfo = {
        createUser,
        signInUser,
        user, 
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;