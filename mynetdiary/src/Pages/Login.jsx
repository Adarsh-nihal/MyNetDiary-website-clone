import {Box, Container,Flex,Image,Text,Form,Stack,Input,Button} from "@chakra-ui/react"
import {Link,useNavigate, Navigate} from "react-router-dom"
import {useState} from "react"
import {useContext} from "react"
import {AuthContext} from "../Components/AuthContext"

function Login(){
    const{data,setData}=useContext(AuthContext)
const navigate=useNavigate()
const handleChange=(e)=>{
   const{value,name}=e.target
       setData({...data,[name]:value})

}

const handleSubmit=()=>{
    if(data.name!==""&&data.number!==""&&data.email!==""&&data.password!==""){
console.log(data)
   navigate("/sign")

    }else{
        alert("fill the data")
    }
}

const{name,email,number,password}=data

    return(
       <Box mt="80px" bgGradient='linear(to-r, green, green.600)' >
                 <Container>
                 <Link to="/"> <Flex pt="10">
                      <Image w="12%" bg="white" 
                      src="https://play-lh.googleusercontent.com/9EXPE7wCzMCabiu0OwMQeQef1YdQgEbqK0e8No6FKMewCkj48a3v2SPoW5yr5oNy_Jk"/>
                     <Text pl="4"  bgGradient='linear(to-l, green.200, white)'
                             bgClip='text' fontSize='35px'
                            fontWeight='extrabold' 
                            textDecoration="underline" >
                            MyNetDiary 
                      </Text>
                     </Flex> 
                     </Link>   
                 </Container>
                 <Box textAlign="center"
                  fontWeight="100%" borderRadius="20px" 
                   bg="white" w="75%" m="auto"  pb="40" 
                   >
                     <Text pt="10" fontSize="45px" 
                      color="#268fd0"
                      >
                        Sign Up: Your Weight plan
                    </Text>

                <Stack  w="40%"  margin="auto"
                   pt="10px" spacing={6}
                 >
                    <Input focusBorderColor='green.500'
                     errorBorderColor='red'
                    type="text"
                     placeholder='enter your name' 
                     onChange={handleChange}
                     name="name"
                     value={name}
                    
                     />
                    <Input
                     focusBorderColor='green.500'
                     errorBorderColor='red'
                     type="email"
                       placeholder='enter your email'
                       onChange={handleChange}
                       name="email"
                       value={email}
                    />
                   <Input
                    isInvalid
                    errorBorderColor='red'
                    focusBorderColor='green.500'
                       type="number"
                      placeholder='enter your number'
                      onChange={handleChange}
                      name="number"
                      value={number}
                   />
                  <Input
                     isInvalid
                     type="text"
                       errorBorderColor='red'
                       focusBorderColor='green.500'
                     placeholder='enter your passsword'
                     onChange={handleChange}
                     name="password"
                     value={password}
                      />
                      <Text color="#268fd0">
                        By signing up, you are agreeing to the
                        <Link  href="https://www.mynetdiary.com/terms.html">
                            <span style={{color:"green",textDecoration:"underline",cursor:"pointer"}}>
                                Terms of Service
                                </span>
                        </Link> 
                     </Text>
                    
               </Stack>
               <Button onClick={handleSubmit} mt="30px" w="15%" fontSize="18px"
                     borderRadius="17px" bg="green.400" 
                     color="white" >
                       SIGN UP
                   </Button>
                 </Box> 
       </Box>
    )
}

export default Login