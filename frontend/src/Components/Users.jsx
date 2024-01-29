import React, { useEffect } from 'react';
import { Container, Box, Text, Tab, TabList, Tabs, TabPanel, TabPanels } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));
        // if(user){
        //     navigate("/home");
        // }
    });


    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            // alignItems={"center"}
            w={"100%"}
            h={"100vh"}
            backgroundImage={"./Login_Back_Image.jpg"}
            backgroundSize={"cover"}
            backgroundRepeat={"no-repeat"}
            opacity={"0.9"}
        >
            <Container maxW="xl" centerContent>
                <Box
                    display="flex"
                    justifyContent="center"
                    p={3}
                    bg={"white"}
                    w="100%"
                    m="40px 0 15px 0"
                    borderRadius="lg"
                    borderWidth="1px"
                >
                    <Text fontSize="4xl" fontFamily={"Work sans"}>Blood Donation</Text>
                </Box>
                <Box
                    bg={"white"} w="100%" p={4} borderRadius="lg" borderWidth="1px"
                >
                    <Tabs variant='soft-rounded'>
                        <TabList>
                            <Tab width="50%">Login</Tab>
                            <Tab width="50%">Sign Up</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Login />
                            </TabPanel>
                            <TabPanel>
                                <SignUp />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Container>
        </Box>
    )
}

export default Home;
