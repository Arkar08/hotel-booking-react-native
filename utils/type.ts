
export type authType = {
    children:React.ReactNode
}


export type auth ={
        email:string,
        password:string
}

export type authContext = {
    login:({email,password}:auth) => void;
    register:({email,name,password}:register) => void;
    // initilize:() => void;
    list:null;
    active:boolean;
    logout:() => void;
}

export type register = {
    email:string,
    name:string,
    password:string
}

export type rooms  = {
        id:string,
        roomNo:number,
        type:string,
        price:number,
        status:string,
        isFeatured:boolean,
        details:any,
        imgUrl:"string[]",
        guestLimit:number
}

export type roomId  = {
        id:string,
        roomNo:number,
        type:string,
        price:number,
        status:string,
        isFeatured:boolean,
        details:any,
        imgUrl:string[],
        guestLimit:number
}


export type roomContext = {
    rooms:rooms[]
    popularRoom:any[]
    availableRoom:any[]
}


export type booking = {
    userId:string,
    roomId:string,

}

export type bookingContext = {
    booking:booking
}