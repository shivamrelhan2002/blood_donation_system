import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { DataState } from '../Context/DataProvider';
import { Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { FormControl, FormLabel, Input, InputRightElement, InputGroup, Stack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { Select } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import Settings from './Settings';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const ProfileBox = () => {
    
    const { user, setUser } = DataState();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [group, setGroup] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");


    const toast = useToast();

    useEffect(()=>{
        if(user){
            setName(user.name);
            setEmail(user.email);
            setAge(user.age);
            setGender(user.gender);
            setGroup(user.group);
            setCity(user.city);
            setState(user.state);
        }
    },[]);

    const handleModal=async()=>{
        try{
          const config={
            headers:{
              Authorization: `Bearer ${user.token}`
            }
          }
          const {data}=await axios.put("http://localhost:3000/users/update",{name,email,age,gender,group,city,state},config);
          console.log(data);
          localStorage.setItem("userInfo",JSON.stringify(data));
          setUser(data);
          toast({
            title: 'Your data will be saved successfully',
            status: 'success',
            duration: 5000,
            position: 'bottom-down',
            isClosable: true,
          })
          onClose();
        }
        catch(err){
          toast({
            title: 'Fill info carefully',
            status: 'error',
            duration: 5000,
            position: 'bottom-down',
            isClosable: true,
          })
        }
      }

    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            w={"60%"}
            m={"auto"}
            p={2}
            mt={"70px"}
            border={"2px solid green"}
            boxShadow={"2xl"}
            borderRadius={20}
        >
            <Text fontSize={"3xl"} fontFamily={'Work sans'} p={2} mx={4} >Name : {user.name}</Text>
            <Text fontSize={"3xl"} fontFamily={'Work sans'} p={2} mx={4} >Email : {user.email}</Text>


            {!user.age ? <Button onClick={onOpen} m={"auto"} my={3} p={2} w={"20%"} h={"50px"} >Add info+</Button> : (
                <>
                    <Text fontSize={"3xl"} fontFamily={'Work sans'} p={2} mx={4} >Age : {user.age}</Text>
                    <Text fontSize={"3xl"} fontFamily={'Work sans'} p={2} mx={4} >Gender : {user.gender.toUpperCase()}</Text>
                    <Text fontSize={"3xl"} fontFamily={'Work sans'} p={2} mx={4} >Blood Group : {user.group}</Text>
                    <Text fontSize={"3xl"} fontFamily={'Work sans'} p={2} mx={4} >City : {user.city}</Text>
                    <Text fontSize={"3xl"} fontFamily={'Work sans'} p={2} mx={4} >State : {user.state}</Text>
                    <Button onClick={onOpen} m={"auto"} my={1} p={2} w={"20%"} h={"50px"} color={"white"} backgroundColor={"#bf2229"} _hover={{color:"#bf2229",backgroundColor:"white",border:"1px solid #bf2229"}} >Change info+</Button>
                </>
            )}

            {/* Modal Here */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
                <ModalOverlay />
                <ModalContent maxH={"800px"} maxW={"500px"} >
                    <ModalHeader>Add Correct Info</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <FormControl id="name">
                            <FormLabel>Enter name:</FormLabel>
                            <Input
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Enter email:</FormLabel>
                            <Input
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </FormControl>
                        <FormControl id="age">
                            <FormLabel>Enter age:</FormLabel>
                            <Input
                                placeholder="Enter your age"
                                onChange={(e) => setAge(e.target.value)}
                                value={age}
                            />
                        </FormControl>
                        <FormControl id='gender'>
                            <FormLabel>Select gender</FormLabel>
                            <RadioGroup onChange={setGender} value={gender}>
                                <Stack direction='row'>
                                    <Radio value='male'>Male</Radio>
                                    <Radio value='female'>Female</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl id="group">
                            <FormLabel>Enter group:</FormLabel>
                            <Select placeholder='Select option' onChange={(e) => setGroup(e.target.value)} value={group} >
                                <option value='A+'>A+</option>
                                <option value='A-'>A-</option>
                                <option value='B+'>B+</option>
                                <option value='B-'>B-</option>
                                <option value='AB+'>AB+</option>
                                <option value='AB-'>AB-</option>
                                <option value='O+'>O+</option>
                                <option value='O-'>O-</option>
                            </Select>
                        </FormControl>
                        <FormControl id="city">
                            <FormLabel>Enter city:</FormLabel>
                            <Input
                                placeholder="Enter your city"
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                            />
                        </FormControl>
                        <FormControl id="state">
                            <FormLabel>Enter State:</FormLabel>
                            <Input
                                placeholder="Enter your state"
                                onChange={(e) => setState(e.target.value)}
                                value={state}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' m={"auto"} onClick={handleModal}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>
    )
}

export default ProfileBox
