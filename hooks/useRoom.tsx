import { RoomContext } from "@/context/RoomContext"
import { useContext } from "react"

export const useRoom = () => {
    const rooms = useContext(RoomContext)

    if(!rooms){
        throw new Error("Room Provider does not exist.")
    }

    return rooms;
}