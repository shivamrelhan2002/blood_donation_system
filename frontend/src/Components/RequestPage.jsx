import { Box, Text, VStack, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { DataState } from "../Context/DataProvider";
import axios from "axios";

const RequestPage = () => {
  const [loading, setLoading] = useState(true);
  const [organisations, setOrganisations] = useState([]);
  const [type, setType] = useState("all");
  const [age, setAge] = useState("");
  const [group, setGroup] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const { user } = DataState();

  console.log(type);

  const searchDonors = async () => {
    // fetch donors from database
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:3000/organisation",
      config
    );
    console.log(data);
    setOrganisations(data);
  };

  return (
    <Box display={"flex"} flexDir={"column"} w={"100%"} h={"100vh"}>
      <Navbar />
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        w={"100%"}
        h={"100vh"}
      >
        <Text
          fontSize={"3xl"}
          fontFamily={"Work sans"}
          p={1}
          m={2}
          color={"#a94442"}
          borderBottom={"1px solid #f1e9eb"}
          marginTop={"75px"}
        >
          Check Blood Availability
        </Text>
        <Box
          display={"flex"}
          w={"100%"}
          h={"80vh"}
          // border={"2px solid green"}
        >
          <Box w={"25%"} h={"80vh"} border={"1px solid #f1e9eb"} mx={1}>
            <Text
              fontSize={"4xl"}
              fontFamily={"Work sans"}
              color={"white"}
              backgroundColor={"#bf2229"}
              mb={3}
              p={2}
            >
              Search For Blood Group{" "}
            </Text>
            <VStack
              // display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              p={2}
            >
              <Select
                placeholder="All types"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="individual">Individual</option>
                <option value="bank">Blood Bank</option>
              </Select>
              <FormControl id="age" m={3}>
                {/* <FormLabel>Enter age:</FormLabel> */}
                <Input
                  placeholder="Select age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </FormControl>
              <FormControl id="group" m={3}>
                {/* <FormLabel>Enter group:</FormLabel> */}
                <Input
                  placeholder="Select group"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                />
              </FormControl>
              <FormControl id="state" m={3}>
                {/* <FormLabel>Enter age:</FormLabel> */}
                <Input
                  placeholder="Select state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </FormControl>
              <FormControl id="district" m={3}>
                {/* <FormLabel>Enter age:</FormLabel> */}
                <Input
                  placeholder="Select district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </FormControl>
              <Button
                backgroundColor={"#bf2229"}
                color={"white"}
                onClick={searchDonors}
              >
                Search
              </Button>
            </VStack>
          </Box>
          <Box
            w={"75%"}
            h={"80vh"}
            mx={1}
            // border={"2px solid red"}
          >
            {/* data */}
            <TableContainer>
              <Table size="lg" border={"2px solid #f1e9eb"}>
                {organisations.length === 0 && (
                  <TableCaption fontSize={"2xl"} fontFamily={"Work sans"}>
                    Search for available blood banks or organisations
                  </TableCaption>
                )}

                <Thead border={"2px solid red"} backgroundColor={"#bf2229"}>
                  <Tr>
                    <Th
                      color={"white"}
                      fontSize={"2xl"}
                      fontFamily={"Work sans"}
                    >
                      S.No.
                    </Th>
                    <Th
                      color={"white"}
                      fontSize={"2xl"}
                      fontFamily={"Work sans"}
                    >
                      Name
                    </Th>
                    <Th
                      color={"white"}
                      fontSize={"2xl"}
                      fontFamily={"Work sans"}
                    >
                      Address
                    </Th>
                    <Th
                      color={"white"}
                      fontSize={"2xl"}
                      fontFamily={"Work sans"}
                    >
                      Group
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {organisations.map((org, id) => (
                    <Tr key={id}>
                      <Td>1.</Td>
                      <Td>{org.name}</Td>
                      <Td>{org.address}</Td>
                      <Td>A+</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RequestPage;
