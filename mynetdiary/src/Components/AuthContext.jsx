import { createContext, useState } from "react"



export const AuthContext=createContext()


const AuthContextProvider=({children})=>{
const[isAuth,setIsAuth]=useState(false)
const[data,setData]=useState({name:"",email:"",password:"",number:""})

const toggleAuth=()=>{
    if(!isAuth){
        setIsAuth(true)
    }
}


    return(
        <AuthContext.Provider  value={{isAuth,toggleAuth,data,setData}}>
            {children}
        </AuthContext.Provider>
    )



}


export default AuthContextProvider