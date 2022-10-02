import {Box, Container,Flex,Image,Text,Form,Stack,Input,Button,
    Checkbox,
} from "@chakra-ui/react"
import {Link, Navigate} from "react-router-dom"
import {useState} from "react"
import {useContext} from "react"

import {AuthContext} from "../Components/AuthContext"
let inits={
    email:"",
    password:""
}

function Signin(){
    const{isAuth,toggleAuth,data}=useContext(AuthContext)
    console.log(data)
    const[item,setItem]=useState(inits)
if(isAuth){
  return <Navigate to="/" />
}

const handleChange1=(e)=>{
  const{value,name}=e.target
  console.log(name,value)
  setItem({...item,[name]:value})
}
const handleSubmit1=()=>{
  if(data.email!==""&&data.password!==""){
 if(data.email==item.email && data.password==item.password){
  alert("login succesfull")
  toggleAuth()
 }else{
  alert("Wrong_credentials")
 }
}
else{
  alert("fill the data first")
}
}

const{email,password}=item

    return(
       <Box mt="80px" h="600px"  bgGradient='linear(to-r, green, green.600)' >
                 <Container >
                  
                   <Link to="/"><Flex pt="10"><Image w="12%" bg="white" 
                      src="https://play-lh.googleusercontent.com/9EXPE7wCzMCabiu0OwMQeQef1YdQgEbqK0e8No6FKMewCkj48a3v2SPoW5yr5oNy_Jk"/>
                    <Text  pl="4"  bgGradient='linear(to-l, green.200, white)' 
                          bgClip='text' fontSize='35px'
                            fontWeight='extrabold' 
                            textDecoration="underline" >
                           MyNetDiary 
                      </Text>
                      </Flex>
                      </Link>
                         
                 </Container>
                 <Box 
                  fontWeight="100%" borderRadius="20px" 
                   bg="white" w="75%" m="auto" mt="3" pb="20" 
                   boxShadow= "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                  >
                    <Box>
                     <Text textAlign="center"  fontSize="45px" 
                      color="#268fd0"
                      >
                      Signin
                    </Text>

                    <Text textAlign="left"  p="5" bg="RGBA(0, 0, 0, 0.04)" w="60%" m="auto" mt="5">If you use one of MyNetDiary’s mobile apps, please sign in with the same account name or email as you do in your MyNetDiary mobile app. 
                        You can see account name on the Settings screen in the mobile app.
                    </Text>
                  </Box>

                  <Box  w="80%" m="auto" mt="50">
                    <Flex>
                      <Box pl="5" p="6" boxShadow="rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"  w="43%"     margin="auto">
                        <Input p="7" fontSize="20" placeholder="Email or Account Name"
                         onChange={handleChange1}
                         name="email"
                         value={email}
                        />
                        <Input  mt="8" fontSize="20"  placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange1}
                        />
                        <Checkbox mt="5"  >Remember me on this computer</Checkbox>
                        <Flex mt="10">
                        <Button  onClick={handleSubmit1} fontSize="19" bg="green" color="white" padding="20px"  >SIGN IN</Button>
                       <Text  ml="65" mt="3"  color="green" textDecoration="underline">Forget Password?</Text>
                       </Flex>
                    </Box>
                    <Box  w="30%"  margin="auto" >
                       <Flex p="2"  bg="#2C5282">
                          <Image w="12%" src="data:image/jpeg;base64,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" />
                        <Text color="white" pl="2"> SIGN IN WITH FACEBOOK</Text> 
                          </Flex>
                         
                          <Flex mt="5" p="2"  bg="#90CDF4">
                          <Image w="12%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" />
                        <Text color="white" pl="2"> SIGN IN WITH GOOGLE</Text> 
                          </Flex>

                          <Flex mt="5" p="2"  bg="black">
                          <Image  w="15%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEX///8AAAC/v7/09PSioqLS0tIwMDD6+vrl5eV7e3vx8fF4eHjLy8tQUFBGRkarq6vY2NiOjo7e3t6EhIS3t7cXFxcMDAyampo+Pj5hYWHb29uwsLDs7OwgICCgoKBXV1dsbGwsLCyJiYm8vLxlZWU3NzckJCSrYnspAAAE5klEQVR4nO2d13KrQAyGg4MDbsENN1xTzvs/4okhTgyIErMrrTT67pmR/lkWrcry9KQoiqIoiqIoimKTPbUBTJj724Pn7ajNYMB04WX0qS1xnuTi3RhT2+I4vneHilVHz8sxpbbHYYaTvFZeSG2Ruyy9ItQWucuopFVMbZKzvJa08rbUNrnKS1krb01tlKNAWunHEKb4GdT9vZoFqNWA2iwneQe10pMhxBDW6oXaLicBgoYrS2q7XKQcuKesqO1yElgrr0dtl4usYa1eqe1ykoqFpfl3gCOslU9tl5PEoFYTarOcpA8vLGqz3GQAaqUZUhBQKz3ngISQVhphwUSqVXvKeXetFVZSTvrNqU1yl1VBqteA2iKHKWilcXsdOalOQ2pz3OZeKq3lNPAj1ZsG7Y0cPO8wWUT6CUwJ5j1/NjiPZlH/ue0zu2gwyYqum8nAH7d+jjXD5SCfgBkljVt4fw2UL0aJdMEisGizWdekQPtAQH8LwCI8y7GZV7vtvfjgOpnOqh/J1pfMnS08Nfh9ei88sV9fGh5JH5P3yQxqVtUv59/kQuiDPTQQ0tofKmqm0EI5ToNgvGitVIqopMTHn1x/gAW1h8YIi2kEC2yonTTE2L5UX8QiDtwJilZfCIhRoYS6HVbsc4QV/XtW+KR2tiMVtWVLnKnd7URFr6M1WJ8V/xZadmZG7W8X3lClilmfqaeoWp2p3e3GAVMr1ttVZfueHZgfpQNMrbhXzODRG9UKAnNhse9HakqeG4T/uCaeVidqVzuDeIBmn2yoGuqyAP85sWc0rQTkk/1mLw0hoON7i6WVgIWF9y1kH2JhJkipPTUA2pYlobhqvQJ9g3myIQVLKwlvIZpYEr6Fcyyx3qg9NUCv2U0z8D/qIJbsJezvaLks1sWvb1q1RJpAQpsRmljUjprgrGK1By3nQO2oCdDE4p9RRhRLwkU+aOdoCffoo23wEoJStNAhofbUAPDFOxaQkPtDO+5IuIgTrxBG7akB0FI0EnZ4vGbSEbWr3cEr3kt4D/HEKo4KM+SCJpaAkgVaCC+hMQQvdhBwgzDO8GoG+9YQ1Gkwamc7gzmJcqZ2titoeYcr3MMHvMnoK8wvWNmjisV98B5XrJh35QIt/ydBLcxIK4VzoQd12jCF87kHrRz2A+PhMLQraH555dtUgy+W5x2pnX6Upiv+rBAzrSTiVS3y8Dz8EInFM2WDOX5/B7XbjwH+5MQ6XCv6GwqxuDYwU2zxfG9nIxCL7/09qFf3ZFC73AF0rThPPiHesZLBOWWKnajh3VSDvLQ4ZwCxlxbvhYXa9cB7x0pB1IrzpzADMYyndtUA5b8VWoJp3i8HVnGa76nwnor/2JuGa7qhAMp11Px39wyMLGBM7aQxEBqQJEwefmO9LMa4Gl3C9qmHf8vyPZavauNbtwexGj8ImA3LYzGQ51r9qsHaD8MEjO+UsBZtse6QrMJS56SQY04RK7GpuM39hoWMPN+iaiPGG2skRe4lDP/jSbRWLQoY23XS6+92/V4yazxRSrhMspa6nPw2KRT+Qr/ujwWcO99bsr9UKAX3Nz5HFbnDE/vCVyuAc2J8rHF9B00v8mwdfYBh/qu4mjX+kamXH5z6FL9b3RMsv3fvw0fScrRynow+r+fLf9uI+TDmIwRhyLuRQ1EURVEURTHCf8eYSCcC+BLCAAAAAElFTkSuQmCC" />
                        <Text color="white" pl="3"> SIGN IN WITH APPLE </Text> 
                          </Flex>

                    </Box>
                    </Flex>

                    <Text  mt="20" fontSize="18px" textAlign="center">
                        No account? 
                      <Link to="/login"><span style={{color:"green",textDecoration:"underline"}} >Sign Up</span></Link>,it's easy.
                    </Text>
                  </Box>
                 
            </Box>  
            
            <Text mt="20" fontSize="30px"  color="#268fd0" textAlign="center" >Download Free MyNetDiary App</Text>
            <Box w="30%" margin="auto"  mt="8" >
              <Flex>
              <Link href="https://apps.apple.com/us/app/calorie-counter-mynetdiary/id287529757?pt=10328&ct=index_page"> 
               <Image w="95%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/app-store-badge.svg"/>
               </Link>
               <Link href="https://play.google.com/store/apps/details?id=com.fourtechnologies.mynetdiary.ad&referrer=utm_source%3Dindex_page%26utm_campaign%3Dindex_page_link"> 
               <Image w="95%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/google-play-badge.svg" />
               </Link>
              </Flex>
            </Box>
            <Text mt="10" fontSize="26px"  color="#268fd0" textAlign="center" >50,907 reviews & counting</Text>

       </Box>
    )
}
export default Signin