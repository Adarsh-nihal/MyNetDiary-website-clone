import {Box,Text,HStack,VStack,Stack,Flex,SimpleGrid,
    Image,
    Container,
    Button,Link
} from "@chakra-ui/react"


function Body(){

    return(
        <Box w="100%" mt="20" bgGradient='linear(to-r, green, green.600)'  width="100%" h="500px"  fontFamily="Cabin,Helvetica,Arial,sans-seri"
          >
          <Flex>
            <Box w="30%" fontSize="70px" lineHeight="70px" pl="10" pt="12"   color="white">
                 <Text >Be Healthy for Life!</Text>
                <Text mt="25px" fontSize="30px"lineHeight="40px" >Your weight loss, diet, andnutrition assistant.</Text>
              <Flex mt="30px">
               <Link href="https://apps.apple.com/us/app/calorie-counter-mynetdiary/id287529757?pt=10328&ct=index_page"> 
               <Image mr="10" w="80%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/app-store-badge.svg"/>
               </Link>
               <Link href="https://play.google.com/store/apps/details?id=com.fourtechnologies.mynetdiary.ad&referrer=utm_source%3Dindex_page%26utm_campaign%3Dindex_page_link"> 
               <Image  w="90%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/google-play-badge.svg" />
               </Link>
                </Flex>
                 <Text lineHeight="40px"color="#46618a" mt="150px" fontSize="23px">Top Rated: 61,383 reviews & counting</Text>
           </Box>
           <Box w="30%">
               <Flex>  
                 <Image w="100%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/iphonex@1x.png" />
                <Image mt="200px" height="400px" w="50%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/iwatch@1x.png" />
                <Image w="84%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/bg-start-right@1x.png" />
               </Flex> 
            </Box>
       </Flex>

          <Box w="64%" m="auto">
            <Text color="#46618a"  fontSize="38px">“You really can't go wrong with MyNetDiaryas a scientifically-proven way to help you lose weight”</Text>
             <Image w="35%" m="auto" mt="8" src="https://s3.amazonaws.com/img.mynetdiary.com/images/wh-logo.svg" />
          </Box>

          <Box  mt="20">
            <Flex >
                <Image w="20%" height="50px" src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-usa-today.png" />
                <Image   w="20%" h="60px" src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-abc-news.svg" />
                <Image  w="10%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-fox.svg" />
                <Image  w="10%" h="40px" src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-times.svg" />
                <Image  w="20%" h="50px" src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-consumer-reports.svg" />
                <Image  w="10%" h="50px" src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-wsj.svg" />
                <Image  w="20%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-chicago-tribune.svg" />
            </Flex>
            
          </Box>

          <Box  m="auto" textAlign="center" mt="50px" pb="10"   bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'>
            <Text fontSize="60px"  color="#268fd0" pt="30px">What it takes to succeed</Text>
            <SimpleGrid mt="10" columns={2} spacing={10}>
              <Box fontSize="45" > 
                <Image m="auto" w="50%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-insights-Illustration-1@2x.png" />
                 <Text fontSize="45px"  color="#268fd0">Find your Diet</Text>
                 <Text  color="#46618a"  fontSize="27px" pt="30px">Find a diet that fits your lifestyle: Calorie Counting, Low-Carb, Keto, Vegan, Vegetarian and more.</Text>
              </Box>
              <Box> 
                <Image m="auto" w="50%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-insights-Illustration-2@2x.png" />
                <Text fontSize="45px"  color="#268fd0">Set Your Targets</Text>
                <Text  color="#46618a"  fontSize="27px" pt="30px">Choose your desired weekly weight loss rate, target date, and source of calories like fat, carbs, and proteins.</Text>
              </Box>
              <Box>
                 <Image m="auto" w="50%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-insights-Illustration-3@2x.png" />
                 <Text fontSize="45px"  color="#268fd0">Log Your Meals & Exercise</Text>
                 <Text  color="#46618a"  fontSize="27px" pt="30px">Use the App to track your food, physical activities, and nutrients. Use the barcode scanner. Log ahead of time for better planning and scheduling.</Text>
              </Box>
               <Box> 
                <Image m="auto" w="50%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-insights-Illustration-4@2x.png" />
                 <Text fontSize="45px"  color="#268fd0">Reach Your Goals</Text>
                 <Text  color="#46618a"  fontSize="27px" pt="30px">Monitor your daily progress, check your weight loss forecast, and receive ongoing advice and feedback. Learn more about nutrients in your diet and make better choices.</Text>
               </Box>  
            </SimpleGrid>
          </Box>

          <Box m="auto" textAlign="center" w="80%" mt="50">
                <Text fontSize="55"   color="#268fd0">Top Rated Calorie Counter App</Text>
                 <Text color="#46618a"  fontSize="30px" >“This is my favorite food diary app. I used six of the "top" apps in this category for several days so that I could compare them and select what worked best for me. MyNetDiary was the winner. Intuitive, simple layout, decent database, appealing graphic design, and no ads.”</Text>
              <Button bg="white" mt="40px" fontSize="20px" color="green" p="8" borderRadius="40px" border="1px solid green">
                SEE MORE TESTIMONIALS </Button>
         </Box>

         <Box m="auto" w="95%" textAlign="center" mt="180px" pb="10">
            <SimpleGrid mt="10" columns={3} spacing={10}>
                  <Box  > 
                    <Image boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius="10px" m="auto" w="100%" src="https://s3.amazonaws.com/img.mynetdiary.com/keto/cover-premium-keto-recipes@2x.jpg" />
                    <Text mt="10" fontSize="45px"  color="#268fd0">PremiumRecipes</Text>
                    <Text color="#46618a"  fontSize="27px" pt="30px">Hundreds of easy recipes, with great variety, carefully crafted for great taste by a team of Registered Dietitians.</Text>
                  </Box>
                  <Box >
                  <Image boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"  borderRadius="10px" m="auto" w="100%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-easy-tracking-premium@2x.png" />
                    <Text mt="10" fontSize="45px"  color="#268fd0">EasyTracking</Text>
                    <Text color="#46618a"  fontSize="27px" pt="30px">Massive food catalog, fastest barcode scanner, quickest food lookup making food tracking a breeze</Text>
                  </Box>
                  <Box>
                  <Image boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius="10px" m="auto" w="100%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-insights-and-guidance-keto@2x.png" />
                    <Text mt="10" fontSize="45px"  color="#268fd0">Insights and Guidance</Text>
                    <Text color="#46618a"  fontSize="27px" pt="30px">Encouraging and supportive feedback, guiding you to your goal.</Text>
                  </Box>    
            </SimpleGrid>
            <Button bg="white" mt="40px" fontSize="20px" color="green" p="8" borderRadius="40px" border="1px solid green">
                MORE FEATURES</Button>
         </Box>

         <Box  textAlign="center" bgGradient='linear(to-r, green.400, green)'>
            <Flex>
            <Image w="45%" src="https://s3.amazonaws.com/img.mynetdiary.com/images/success-story-julie@1x.png" />
           <VStack w="35%">
           <Text textAlign="left" fontSize="70px" color="white">Julie Martel</Text>
           <Text pl="20" textAlign="left" fontSize="30px" color="white">LOST 71 LB (35%) AND MAINTAINED AFTER 492 DAYS.</Text>
           <Text pl="20" pr="20" textAlign="left" fontSize="25px" color="yellow.100">“My life changed.My life is beautiful! I am beautiful!!!”</Text>
           <Button bg="green.300" mt="50px" fontSize="20px" color="white" p="8" borderRadius="40px" border="1px solid green">
                READ SUCCESS STORY</Button>
           </VStack>
            </Flex>
         </Box>
          
        </Box>
    )
}

export default Body