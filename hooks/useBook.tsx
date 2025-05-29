import { BookingContext } from "@/context/BookingContext"
import { useContext } from "react"

const useBook = () => {
    const context = useContext(BookingContext)

    if(!context){
        throw new Error ("booking provider does not exist.")
    }

    return context;
}
export default useBook;