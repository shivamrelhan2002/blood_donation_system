import { Box, Button, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FormControl, FormLabel, Input, InputRightElement, InputGroup } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import axios from 'axios';
import { DataState } from '../Context/DataProvider';


const Settings = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = useState(true);
    const [showConfirm, setShowConfirm] = useState(true);
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const { user, setUser } = DataState();
    const toast=useToast();
    const navigate = useNavigate();

    const handleModal = async () => {
        if (password !== confirmpassword) {
            toast({
                title: 'Confirm password must be equal to password',
                status: 'error',
                duration: 4000,
                isClosable: true,
                positon: "bottom"
            })
            return;
        }
        try{
            const config = {
                headers: {
                    "Content-type":"application/json",
                    Authorization: `Bearer ${user.token}`
                }
            }
            const { data } = await axios.put("http://localhost:3000/users/changepassword", {
                password: password
            }, config);
            console.log(data);
            localStorage.setItem("userInfo", JSON.stringify(data));
            setUser(data);
            setPassword("");
            setConfirmPassword("");
            onClose();
        }
        catch(err){
            toast({
                title: 'Error occured while changing password',
                status: 'error',
                duration: 4000,
                isClosable: true,
                positon: "bottom"
              })
        }
    }

    const logOut = () => {
        localStorage.removeItem("userInfo");
        navigate("/login");
    }

    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"100%"}
            h={"80vh"}
            border={"2px solid green"}
        >
            <Text fontSize={"3xl"} fontFamily={"Work sans"} border={"2px solid red"} w={"60%"} h={"70px"} backgroundColor={'cyan'} p={2}  borderRadius={10} m={3} >Change your password<Button onClick={onOpen}>+</Button></Text>

            <Text fontSize={"3xl"} fontFamily={"Work sans"} border={"2px solid red"} w={"60%"} h={"70px"} backgroundColor={'cyan'} p={2} borderRadius={10} m={3} >Log Out<Button onClick={logOut}>+</Button></Text>
            

            <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
                <ModalOverlay />
                <ModalContent maxH={"800px"} maxW={"500px"} >
                    <ModalHeader>Enter password carefully</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl id="password">
                            <FormLabel>Enter password:</FormLabel>
                            <InputGroup>
                                <Input
                                    type={show ? "password" : "text"}
                                    placeholder="Enter password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
                                        {show ? 'Show' : 'Hide'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl id="confirmpassword">
                            <FormLabel>Enter confirm password:</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showConfirm ? "password" : "text"}
                                    placeholder="Enter confirm password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={() => setShowConfirm(!showConfirm)}>
                                        {showConfirm ? 'Show' : 'Hide'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
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

export default Settings;
