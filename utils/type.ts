
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

export type roomContext = {
    rooms:{
        roomNo:number,
        roomType:string,
        price:number,
        description:string,
        status:string,
        isFeatured:string,
        imgUrl:string[],
        createdAt:string
    },
    getRoom:() => void;
}