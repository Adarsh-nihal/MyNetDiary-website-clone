import { createContext, useState } from "react"



export const AuthContext=createContext()


const AuthContextProvider=({children})=>{
const[isAuth,setIsAuth]=useState(false)

const toggleAuth=()=>{
    if(!isAuth){
        setIsAuth(true)
    }
}


    return(
        <AuthContext.Provider  value={{isAuth,toggleAuth}}>
            {children}
        </AuthContext.Provider>
    )



}


export default AuthContextProvider