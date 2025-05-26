import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
    const auth = useContext(AuthContext)

    if(!auth){
        throw new Error("authProvider does not exist.")
    }

    return auth;
}