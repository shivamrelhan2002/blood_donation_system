import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  VStack,
  Button,
  useToast,
  Box,
  Container,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import axios from "axios";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import SignupUser from "./Users/SignupUser";
import SignupOrg from "./Organisation/SignupOrg";

const SignUp = () => {
  const [show, setShow] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const toast = useToast();

  const setImage = (pics) => {
    if (pics === undefined) {
      console.log("Select an image");
      return;
    }

    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "chat-app");
    data.append("cloud_name", "dkihf3dtx");
    fetch("https://api.cloudinary.com/v1_1/dkihf3dtx/image/upload", {
      method: "POST",
      mode: "cors",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPic(data.url.toString());
        console.log(pic);
      });
  };

  const handleForm = async (e) => {
    if (password !== confirmpassword) {
      toast({
        title: "Confirm password must be equal to password",
        status: "error",
        duration: 4000,
        isClosable: true,
        positon: "bottom",
      });
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log(pic);
      const { data } = await axios.post(
        "http://localhost:3000/users/register",
        { name, email, password, pic },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "bottom",
      });
    } catch (err) {
      toast({
        title: "Error occurred",
        description: "Check again before signup",
        status: "error",
        duration: 5000,
        isClosable: true,
        positon: "bottom",
      });
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      w={"100%"}
      h={"100vh"}
      backgroundImage={"/public/About.png"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      opacity={"0.9"}
    >
      <Container maxW="xl" centerContent>
        <Box
          display="flex"
          justifyContent="center"
          p={1}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily={"Work sans"} color={"black"}>
            Blood Donation
          </Text>
        </Box>
        <Box
          bg={"rgba(255, 255, 255, 0.8)"}
          w="100%"
          p={4}
          borderRadius="lg"
          borderWidth="1px"
        >
          <Tabs variant="soft-rounded">
            <TabList>
              <Tab width="50%">User</Tab>
              <Tab width="50%">Organisation</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SignupUser />
              </TabPanel>
              <TabPanel>
                <SignupOrg />
              </TabPanel>
            </TabPanels>
            <Text fontSize={"1xl"} fontFamily={"Work sans"} ml={"25%"}>
              Already have an Account, please
              <ChakraLink as={ReactRouterLink} to={"/Login"}>
                {" "}
                Login
              </ChakraLink>
            </Text>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
