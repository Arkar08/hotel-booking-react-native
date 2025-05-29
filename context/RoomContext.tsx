
import { url } from "@/config/apiConfig";
import { authType, roomContext, rooms } from "@/utils/type";
import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const RoomContext = createContext<roomContext>({
    rooms:[]
});


const RoomProvider = ({children}:authType) => {

    const [rooms,setRooms] = useState<rooms[]>([])


    const getRoom = async() => {
        await axios.get(`${url}room`).then((res:any)=>{
            setRooms(res.data.data)
        },(error:any)=>{
            console.log(error)
        })
    }


    useEffect(()=>{
        getRoom()
    },[])


    const data = {rooms}

    return (
        <RoomContext.Provider value={data}>
            {children}
        </RoomContext.Provider>
    )
}

export default RoomProvider;

