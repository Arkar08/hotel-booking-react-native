import { authType, bookingContext } from "@/utils/type";
import { createContext } from "react";


export const BookingContext  = createContext<bookingContext>({
    booking:{
        roomId:"",
        userId:""
    }
})


const BookingProvider  = ({children}:authType) => {
    

    const data = {}

    return (
        <BookingContext.Provider value={data}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingProvider;