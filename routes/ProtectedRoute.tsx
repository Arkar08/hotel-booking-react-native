import { useAuth } from "@/hooks/useAuth";
import { authType } from "@/utils/type";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export const ProtectedRoute  = ({children}:authType) => {
    const router = useRouter()
    const [mounted, setMounted] = useState(false);
    const {active,list} = useAuth()

    useEffect(() => {
       setMounted(true)
    }, []);

   useEffect(()=>{
        if (mounted) {
            if (!active && list === null) {
                router.replace("/auth/login");
            }
        }
   },[active, list, mounted, router])

    return children;
}