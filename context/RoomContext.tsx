import Axios from "@/config/apiConfig";
import { authType, roomContext } from "@/utils/type";
import { createContext } from "react";



export const RoomContext = createContext<roomContext | undefined>({
    rooms:{
        roomNo:0,
        roomType:"",
        price:0,
        description:"",
        status:"",
        isFeatured:"",
        imgUrl:[],
        createdAt:""
    },
    getRoom:() => {}
});


const RoomProvider = ({children}:authType) => {

    // const [rooms,setRooms] = useState({
    //     roomNo:0,
    //     roomType:"",
    //     price:0,
    //     description:"",
    //     status:"",
    //     isFeatured:"",
    //     imgUrl:[],
    //     createdAt:""
    // })



    const getRoom = async() => {
        await Axios.get("rooms").then((res)=>{
            console.log(res)
        },err => {
            console.log(err)
        })
    }


    const data = {getRoom}

    return (
        <RoomContext.Provider value={data}>
            {children}
        </RoomContext.Provider>
    )
}

export default RoomProvider;