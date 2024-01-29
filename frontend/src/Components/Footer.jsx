import React, { useState } from 'react'
import { Box, Button, Text } from '@chakra-ui/react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { EmailIcon } from "@chakra-ui/icons";


const Footer = () => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactForm = async () => {

  }

  return (
    <Box
      display={{base:"block",md:"flex"}}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      w={"100%"}
      h={"auto"}
      border={"2px solid black"}
      backgroundColor={"#de1f26"}
    >
      {/* Another box */}
      <Box
        display={"flex"}
        flexDir={"column"}
        // border={"2px solid black"}
        w={{base:"90%",md:"40%"}}
        h={"auto"}
        m={3}
      >
        <Text fontSize={"3xl"} fontFamily={"Wok sans"} color={"white"} fontWeight={"bold"} p={2} m={3} >Contact Information</Text>
        <Box
          display={"flex"}
        >
          <EmailIcon w={6} h={6} color='white' m={2} />
          <Text fontSize={"2xl"} fontFamily={"Work sans"} color={"white"} >xyz@lifesaver.com</Text>
        </Box>
        <Box
          borderTop={"1px solid white"}
          w={"100%"}
          h={"auto"}
          mt={"auto"}
        >
          <Text fontSize={"2xl"} fontFamily={"Work sans"} color={"white"} m={2} p={2} >Copyright © Lifesaver.com | All rights reserved</Text>
        </Box>
      </Box>
      {/* Contact form box */}
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        w={{base:"90%",md:"40%"}}
        h={"auto"}
        border={"2px solid red"}
        backgroundColor={"white"}
        borderRadius={10}
        p={3}
        m={3}
      >
        <Text fontSize={"2xl"} fontFamily={"Work sans"} m={"auto"} >Contact Us</Text>
        <FormControl id="name">
          <FormLabel>Enter name:</FormLabel>
          <Input
            placeholder="Enter your name" value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Enter email:</FormLabel>
          <Input
            placeholder="Enter your email" value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="number">
          <FormLabel>Enter number:</FormLabel>
          <Input
            placeholder="Enter your number" value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Enter message:</FormLabel>
          <Input
            placeholder="Enter your message" value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <Button m={"auto"} mt={2} w={"20%"} h={"50px"} onClick={handleContactForm} backgroundColor={"#de1f26"}><Text fontSize={"1xl"} fontFamily={"Work sans"} color="white"  >Send</Text></Button>
      </Box>

    </Box>
  )
}

export default Footer
