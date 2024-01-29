import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const DonorBox = ({user}) => {
  return (
    <Box
        display={"flex"}
        flexDir={"column"}
        w={{ base: "100%", md: "40%", lg:"30%" }}
        h={"70vh"}
        border={"2px solid red"}    
        borderRadius={"15"}
        p={2}
        m={2}
        // boxShadow='inner' p='6' rounded='md' bg='white'
    >
        <Image src={user.pic} w={"100%"} h={"300px"} borderRadius={15} />
        <Text fontSize={"2xl"} fontFamily={"Work sans"} p={2} m={2} >Name : {user.name}</Text>
        <Text fontSize={"2xl"} fontFamily={"Work sans"} p={2} m={2} >Blood Group : {user.group}</Text>
        <Button w={"30%"} h={"50px"} m={"auto"} >More info..</Button>
    </Box>
  )
}

export default DonorBox
