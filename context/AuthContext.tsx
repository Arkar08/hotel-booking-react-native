import { url } from "@/config/apiConfig";
import { auth, authContext, authType, register } from "@/utils/type";
import axios from "axios";
// import * as SecureStore from 'expo-secure-store';
import { createContext, useState } from "react";

export const AuthContext = createContext<authContext | undefined>({
    login:() => {},
    register:() => {},
    // initilize:() => {},
    list:null,
    active:true,
    logout:() => {}
})


const AuthProvider = ({children}:authType) => {
    const [list,setList] = useState(null)
    const [active,setActive] = useState(false)


    const login = async({email,password}:auth) => {
        const data = {
            email:email,
            password:password
        }
        try {
            // const response = await axios.post(`${url}/users/login`,data)
            // const {token,email} = response.data;
            // axios.defaults.headers.common['Authorization'] = `Baerer ${token}`
            setActive(true)
            // await SecureStore.setItemAsync("token",String(token))
            // setList(token)
            // return email;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    const register = async({email,name,password}:register) => {
        const data = {
            email:email,
            name:name,
            password:password
        }
        try {
            const response = await axios.post(`${url}/users/register`,data)
            const {token,email} = response.data;
            setActive(true)
            setList(token)
            axios.defaults.headers.common['Authorization'] = `Baerer ${token}`
            return email;
        } catch (error) {
            throw error;
        }
    }


    const logout =  async () => {
        try {
           const response = await axios.post(`${url}/users/logout`);
           setActive(false)
           return response.data.message;
        } catch (error) {
            throw error;
        }
    }
    

    const data = {login,register,list,active,logout}

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;


