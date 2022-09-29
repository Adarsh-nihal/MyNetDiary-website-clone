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
    <Text>Features</Text>
    <Text>Features</Text>
    <Text>Features</Text>
    <Text>Features</Text>
    <Text>Features</Text>

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