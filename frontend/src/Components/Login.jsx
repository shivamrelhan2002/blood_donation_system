import React from "react";
import {
  InputGroup,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Button,
  useToast,
  Text,
  Box,
  Container,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import LoginUser from "./Users/LoginUser";
import LoginOrg from "./Organisation/LoginOrg";

const Login = () => {
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
          p={3}
          bg={"rgba(255, 255, 255, 0.8)"} // Adjust the alpha value for transparency
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
          zIndex={"0.8"}
        >
          <Text fontSize="4xl" fontFamily={"Work sans"}>
            Blood Donation
          </Text>
        </Box>
        <Box
          bg={"rgba(255, 255, 255, 0.8)"} // Adjust the alpha value for transparency
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
                <LoginUser />
              </TabPanel>
              <TabPanel>
                <LoginOrg />
              </TabPanel>
            </TabPanels>
            <Text fontSize={"1xl"} fontFamily={"Work sans"} ml={"25%"}>
              If you don't have an account, please
              <ChakraLink as={ReactRouterLink} to={"/register"}>
                {" "}
                sign up
              </ChakraLink>
            </Text>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
