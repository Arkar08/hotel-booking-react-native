
import { url } from "@/config/apiConfig";
import { authType, roomContext, rooms } from "@/utils/type";
import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const RoomContext = createContext<roomContext>({
    rooms:[],
    popularRoom:[],
    availableRoom:[]
});


const RoomProvider = ({children}:authType) => {

    const [rooms,setRooms] = useState<rooms[]>([])
    const [popularRoom,setPopularRoom] = useState([])
    const [availableRoom,setAvailableRoom] = useState([])


    const getRoom = async() => {
        await axios.get(`${url}room`).then((res:any)=>{
            const mainData = res.data.data;
            setRooms(mainData)
            const filterData = mainData.filter((data:any)=>{
                if(data.isFeatured === true){
                    return data;
                }
            })
            setPopularRoom(filterData)

            const filterAvailable = mainData.filter((data:any)=>{
                if(data.status === 'available'){
                    return data;
                }
            })
            setAvailableRoom(filterAvailable)
        },(error:any)=>{
            console.log(error)
        })
    }


    useEffect(()=>{
        getRoom()
    },[])


    const data = {rooms,popularRoom,availableRoom}

    return (
        <RoomContext.Provider value={data}>
            {children}
        </RoomContext.Provider>
    )
}

export default RoomProvider;

