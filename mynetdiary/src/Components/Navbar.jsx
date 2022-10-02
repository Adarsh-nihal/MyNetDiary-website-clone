import {NavLink,Link} from "react-router-dom"
import {Flex,Text,Image,Box,Heading,Spacer,Button,ButtonGroup,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'

function Navbar(){
return(
   <Box zIndex="20" bg="white" pos="fixed" top="0"  p="3" fontFamily="Cabin,Helvetica,Arial,sans-seri" style={{boxShadow:"rgb(0 0 0 / 11%) 0 10px 16px"}}>
 <Flex justifyContent="space-between" alignItems="center">
 <Box  w="25%">
      <Flex>
      <Image w="16%" bg="white" src="https://play-lh.googleusercontent.com/9EXPE7wCzMCabiu0OwMQeQef1YdQgEbqK0e8No6FKMewCkj48a3v2SPoW5yr5oNy_Jk"/>
      <Text pl="4"  bgGradient='linear(to-l, green, #FF0080)' bgClip='text' fontSize='35px'
  fontWeight='extrabold' textDecoration="underline" ><Link to="/">MyNetDiary </Link></Text>
     </Flex>      
  </Box >
  <Box w="40%">
 <Flex fontSize="20"  justifyContent="space-between">
   <div style={{pointer:"cursor"}}>
   <Popover>
  <PopoverTrigger>
    <Text color="#46618a" >Features<ChevronDownIcon/> </Text>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />

    <PopoverBody> <li style={{color:"blue"}}>iPhone & iPad app </li></PopoverBody>
       <PopoverBody> <li style={{color:"blue"}}>Android app </li></PopoverBody>
    <PopoverBody> <li style={{color:"blue"}}>User </li></PopoverBody> <PopoverBody> <li style={{color:"blue"}}>MyNetDiary vs MyFitnessPal</li></PopoverBody>
    
  </PopoverContent>
</Popover>
</div>

<div style={{pointer:"cursor"}}>
   <Popover>
  <PopoverTrigger>
    <Text color="#46618a" >Diets<ChevronDownIcon/> </Text>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />

    <PopoverBody> <li style={{color:"blue"}}>Calorie Counting</li></PopoverBody>
       <PopoverBody> <li style={{color:"blue"}}>Law-Carb </li></PopoverBody>
    <PopoverBody> <li style={{color:"blue"}}>Keto </li></PopoverBody> 
    <PopoverBody> <li style={{color:"blue"}}>High-Proteins</li></PopoverBody>
    <PopoverBody> <li style={{color:"blue"}}>Law-Fat</li></PopoverBody>
    <PopoverBody> <li style={{color:"blue"}}>Mediterranean</li></PopoverBody>
    <PopoverBody> <li style={{color:"blue"}}>Vegetarian</li></PopoverBody>
    <PopoverBody> <li style={{color:"blue"}}>Vegan</li></PopoverBody>
  </PopoverContent>
</Popover>
</div>

<div style={{pointer:"cursor"}}>
   <Popover>
  <PopoverTrigger>
    <Text color="#46618a" >Library<ChevronDownIcon/> </Text>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />

    <PopoverBody> <li style={{color:"blue"}}>Weight Loss Blog</li></PopoverBody>
       <PopoverBody> <li style={{color:"blue"}}>Diet Library</li></PopoverBody>
    <PopoverBody> <li style={{color:"blue"}}>Dietitian team</li></PopoverBody> 
   
  </PopoverContent>
</Popover>
</div>

<div style={{pointer:"cursor"}} >
   <Popover>
  <PopoverTrigger>
    <Text color="#46618a">Food<ChevronDownIcon/> </Text>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />

    <PopoverBody> <li style={{color:"blue"}}>Food Search</li></PopoverBody>
       <PopoverBody> <li style={{color:"blue"}}>Database Licensing & API</li></PopoverBody>
   
  </PopoverContent>
</Popover>
</div>

<div style={{pointer:"cursor"}}>
   <Popover>
  <PopoverTrigger>
    <Text color="#46618a" >Bussiness<ChevronDownIcon/> </Text>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />

    <PopoverBody> <li style={{color:"blue"}}>Find Healthcare Professional</li></PopoverBody>
       <PopoverBody> <li style={{color:"blue"}}>For Healthcare Professionals</li></PopoverBody>
       <PopoverBody> <li style={{color:"blue"}}>For Trainers and Clubs</li></PopoverBody>
       <PopoverBody> <li style={{color:"blue"}}>MyNetDiary vs MyFitnessPal</li></PopoverBody>
       <PopoverBody> <li style={{color:"blue"}}>Food Databse Licensing</li></PopoverBody>
   
  </PopoverContent>
</Popover>
</div>

 </Flex>
 </Box>
  <Box>
  <Link to="/login"><Button color="white" bg="orange.300" borderRadius="25px" w="130px" fontSize="20" h="50px"> SIGN UP</Button></Link>
  <Link to="/sign"> <Button ml="10"  color="green"  borderRadius="25px" w="130px" bg border="2px solid green" fontSize="20" h="50px">SIGN IN</Button> </Link>
   </Box>
 </Flex>
 </Box>
    
)

}

export default Navbar