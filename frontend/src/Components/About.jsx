import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
      <Navbar />

      <Box
        w="100%"
        h="300vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        backgroundColor="#f5f5f5" /* Light gray background color */
      >
        <Box
          w="100%"
          minHeight="100vh"
          backgroundImage="/public/About.png"
          opacity={"0.9"}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="white"
          textAlign="center"
        >
          <Text
            fontSize={"5vw"}
            fontFamily={"Work sans"}
            color={"WHITE"}
            fontWeight={"bold"}
            opacity={"0.7"}
            p={1}
          >
            DONATE BLOOD
          </Text>
          <Text
            fontSize={"5vw"}
            fontFamily={"Work sans"}
            color={"WHITE"}
            fontWeight={"bold"}
            opacity={"0.7"}
          >
            SAVE LIFE
          </Text>
          <Text
            fontSize={"3vw"}
            font-family:Century
            Gothic
            CenturyGothic
            AppleGothic
            sans-serif
            color={"WHITE"}
            opacity={"0.7"}
          >
            Every Drop Is Life.
          </Text>
          <Text
            fontSize={"3vw"}
            font-family:Century
            Gothic
            CenturyGothic
            AppleGothic
            sans-serif
            color={"WHITE"}
            opacity={"0.7"}
          >
            The Blood You Donate gives Someone another chance at Life
          </Text>
        </Box>

        <Text
          fontSize="4xl"
          fontFamily="Work sans"
          color="#333333" /* Dark gray text color */
        >
          LEARN ABOUT DONATING BLOOD
        </Text>

        <TableContainer width="100%" maxHeight="70vh" overflowY="auto" mt={8}>
          <Table variant="simple" size="md">
            <Thead backgroundColor="#EA2027">
              <Tr>
                <Th fontSize="1xl" color={"white"}>
                  Blood Type
                </Th>
                <Th fontSize="1xl" color={"white"}>
                  Donate Blood To
                </Th>
                <Th fontSize="1xl" color={"white"}>
                  Receive Blood From
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>A+</Td>
                <Td>A+ AB+</Td>
                <Td>A+ A- O+ O-</Td>
              </Tr>
              <Tr>
                <Td>B+</Td>
                <Td>B+ AB+</Td>
                <Td>B+ B- O+ O-</Td>
              </Tr>
              <Tr>
                <Td>AB+</Td>
                <Td>AB+</Td>
                <Td>All Groups</Td>
              </Tr>
              <Tr>
                <Td>O+</Td>
                <Td>O+ A+ B+ AB+</Td>
                <Td>O+ O-</Td>
              </Tr>
              <Tr>
                <Td>A-</Td>
                <Td>A+ A- AB+ AB-</Td>
                <Td>A- O-</Td>
              </Tr>
              <Tr>
                <Td>B-</Td>
                <Td>B+ B- AB+ AB-</Td>
                <Td>B- O-</Td>
              </Tr>
              <Tr>
                <Td>AB-</Td>
                <Td>AB+ AB-</Td>
                <Td>O+ O-</Td>
              </Tr>
              <Tr>
                <Td>O-</Td>
                <Td>All Groups</Td>
                <Td>O-</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Box mt={8} w="90%" p={4} padding={"25px"} borderRadius="8px">
          <Text
            fontSize="4xl"
            mb={4}
            color="white"
            backgroundColor={"#EA2027"}
            w={"100%"}
            textAlign={"center"}
          >
            Eligibility requirements
          </Text>
          To be eligible to donate whole blood, plasma or platelets, you must
          be:
          <Text>
            <ul>
              <li>
                At least 16 or 17 years old, depending on the law in your state.
                Some states allow legal minors to donate with parent permission.
                While there's no legal upper age limit, policies may vary
                between individual donor centers
              </li>
              <li>At least 110 pounds (about 50 kilograms).</li>
              <li>Able to pass the physical and health-history assessments.</li>
            </ul>
          </Text>
        </Box>

        <Box
          mt={8}
          w="90%"
          /* White background color */ p={4}
          padding={"25px"}
          borderRadius="8px"
        >
          <Text
            fontSize="4xl"
            mb={4}
            color="white"
            backgroundColor={"#EA2027"}
            textAlign={"center"}
          >
            Before Blood Donation
          </Text>
          {}
          <Text>
            Before you can donate blood, you will be asked to fill out a
            confidential medical history. It includes questions about behaviors
            known to carry a higher risk of bloodborne infections — infections
            that are transmitted through blood.
          </Text>
          <Text>
            Because of the risk of bloodborne infections, not everyone can
            donate blood. The following are groups that are not eligible to
            donate blood:
          </Text>
          <Text>
            <ul>
              <li>
                Anyone who has used injected drugs, steroids or another
                substance not prescribed by a health care provider in the past
                three months
              </li>
              <li>Anyone who has engaged in drugs in the past three months</li>
              <li>Anyone who has had a positive test for HIV</li>
            </ul>
          </Text>
        </Box>

        <Box mt={8} w="90%" p={4} borderRadius="8px" padding={"25px"}>
          <Text
            fontSize="4xl"
            mb={4}
            color="white"
            backgroundColor={"#EA2027"}
            textAlign={"center"}
          >
            After Blood Donation
          </Text>
          <Text>
            After donating, you sit in an observation area, where you rest and
            eat a light snack. After 15 minutes, you can leave. After your blood
            donation:
          </Text>
          <ul>
            <li>Drink extra fluids.</li>
            <li>Keep your bandage on and dry for the next four hours.</li>
            <li>
              If you have bleeding after removing the bandage, put pressure on
              the site and raise your arm until the bleeding stops
            </li>
            <li>
              Consider adding iron-rich foods to your diet to replace the iron
              lost with blood donation.
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
