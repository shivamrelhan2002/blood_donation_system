import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import Footer from "./Footer";
import DonorBox from "./DonorBox";
import { DataState } from "../Context/DataProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) {
      navigate("/login");
    }
    // const org=JSON.parse(localStorage.getItem("orgInfo"));
    // if(org){
    //   toast({
    //     title: 'Error occured',
    //     description: "You dont have authority",
    //     status: 'error',
    //     duration: 5000,
    //     isClosable: true,
    //     positon: "bottom"
    //   })
    // }
  }, []);

  const { user } = DataState();

  return (
    <Box>
      <Navbar />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        h={"auto"}
        // border={"2px solid red"}
        backgroundImage={"/public/Home.jpg"}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        opacity={"0.9"}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          w={{ base: "80%", lg: "50%" }}
          h={"auto"}
        >
          <Text
            fontSize={"3xl"}
            fontFamily={"Work sans"}
            color={"white"}
            fontWeight={"bold"}
            opacity={"0.7"}
            mt={"15%"}
            p={1}
          >
            Donate Blood, Save Life
          </Text>
          <Text
            fontSize={"4vw"}
            fontFamily={"Work sans"}
            color={"white"}
            fontWeight={"bold"}
            opacity={"0.7"}
            m={"5%"}
            p={1}
          >
            Your drops of blood are the ocean of happiness to others
          </Text>
          <Button
            w={"30%"}
            h={"50px"}
            color={"white"}
            backgroundColor={"#bf2229"}
            _hover={{
              color: "#bf2229",
              backgroundColor: "white",
              border: "1px solid #bf2229",
            }}
            m={"3%"}
            mb={"20%"}
            fontSize={"2xl"}
            fontFamily={"Work sans"}
          >
            Become a donor
          </Button>
        </Box>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDir={"column"}
        w={"100%"}
        h={"auto"}
        // border={"2px solid green"}
      >
        <Box>
          <Text
            fontSize={"5xl"}
            fontFamily={"Work sans"}
            m={3}
            p={3}
            fontWeight={"bold"}
            fontStyle={"revert"}
          >
            Top Donors
          </Text>
        </Box>
        <Box
          display={{ base: "block", md: "flex" }}
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
          p={3}
          w={"100%"}
          h={"auto"}
          // border={"2px solid green"}
        >
          {user && <DonorBox user={user} />}
          {user && <DonorBox user={user} />}
          {user && <DonorBox user={user} />}
        </Box>
        <Button w={"10%"} h={"50px"} m={"5"} colorScheme="red" variant="solid">
          Load more..
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
