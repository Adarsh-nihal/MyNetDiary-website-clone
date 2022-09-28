import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Signin from "./Signin"

const AllRoutes=()=>{

    return(
        // <Flex>
        <Routes>
       <Route path="/"  element={<Home/>} ></Route>
       <Route path="/login" element={<Login />}></Route>
       <Route path="/sign" element={<Signin />}></Route>
       <Route></Route>
      </Routes>
    //   </Flex>
    )
}

export default AllRoutes