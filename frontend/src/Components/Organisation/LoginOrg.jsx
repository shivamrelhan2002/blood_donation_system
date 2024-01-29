import React, { useEffect } from 'react';
import { useState } from 'react';
import { InputGroup, VStack, FormControl, FormLabel, Input, InputRightElement, Button, useToast, Text, Box, Container, Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import axios from 'axios';

 
const LoginOrg = () => {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  // useEffect(()=>{
  //   const org=JSON.parse(localStorage.getItem("orgInfo"));
  //   if(org){
  //     navigate('/organisation');
  //   }
  // })

  const handleForm = async () => {
    console.log("Login func");
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      };
      const { data } = await axios.post("http://localhost:3000/organisation/login", { email, password }, config);
      console.log(data);
      toast({
        title: 'Login Successfull',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: "bottom"
      })
      // setUser(data);
      localStorage.setItem("orgInfo", JSON.stringify(data));
      navigate("/home");
    }
    catch (err) {
      toast({
        title: 'Error occured',
        description: "Check again before login",
        status: 'error',
        duration: 5000,
        isClosable: true,
        positon: "bottom"
      })
    }
  }

  return (
    <VStack>
      <FormControl id="email">
        <FormLabel>Enter email:</FormLabel>
        <Input
          placeholder="Enter organisation email" value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Enter password:</FormLabel>
        <InputGroup>
          <Input
            type={show ? "password" : "text"}
            placeholder="Enter password" value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
              {show ? 'Show' : 'Hide'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {/* <Text fontFamily={"Work sans"} m={1} >If you don't have account,please
        <ChakraLink as={ReactRouterLink} onClick={()=> <SignUp/>} > sign up</ChakraLink>
      </Text> */}
      <Button onClick={handleForm} colorScheme='blue' width="30%" mt={4}
      >Login</Button>
    </VStack>
  )
}

export default LoginOrg
