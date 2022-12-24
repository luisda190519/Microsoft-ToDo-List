import { createContext, useEffect, useState } from "react";
import { getRequest } from "./Request";

const AuthProvider = async function(props){
    const AuthContext = createContext({});
    const user = JSON.parse(localStorage.getItem('user'))
    const [auth, setAuth] = useState(user);

    const verifyAuth = async function() {
        const response = await getRequest('/user/' + props.userID)
        setAuth(typeof response === 'string' ? {} : (response.id === user.id ? auth : {}))
    }

    useEffect(() => {
        verifyAuth();
    }, [])

    useEffect(() => {
        setAuth(auth)
    }, [auth])

    return <AuthContext.Provider value={{ auth, setAuth }}></AuthContext.Provider>
}

export default AuthProvider;