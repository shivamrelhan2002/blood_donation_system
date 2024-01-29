import React, { useRef, useState, useEffect } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { DataState } from "../Context/DataProvider";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";

const Navbar = () => {
  const { user } = DataState();
  const contact = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    const threshold = 700; // Change this value to 20 pixels

    setIsScrolled(scrollHeight > threshold);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const giveStyles = (link) => ({
    fontSize: "25px",
    fontFamily: "Work sans",
    color: "black",
    w: "5%",
    textAlign: "center",
    textDecoration: "none",
    borderBottom: activeLink === link ? "2px solid black" : "none",
    paddingBottom: "2px", // Optional: Add some padding for better visual appearance
  });

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={1}
      w={"100%"}
      h={"65px"}
      backgroundColor={
        isScrolled ? "rgba(207, 0, 15, 1)" : "rgba(207, 0, 15, 0)"
      }
      opacity={isScrolled ? "0.9" : "1"}
      position={"fixed"}
      top={0}
      zIndex={1000}
      transition="background-color 0.3s, opacity 0.3s"
    >
      <Text fontSize={"4xl"} fontWeight={"bold"} fontFamily={"Work sans"}>
        LifeSaver
      </Text>
      <Text
        style={giveStyles("/home")}
        onClick={() => handleLinkClick("/home")}
      >
        <ChakraLink as={ReactRouterLink} to="/home">
          Home
        </ChakraLink>
      </Text>
      <Text
        style={giveStyles("/services/donor")}
        onClick={() => handleLinkClick("/services/donor")}
      >
        <ChakraLink as={ReactRouterLink} to="/services/donor">
          Looking for blood
        </ChakraLink>
      </Text>
      <Text
        style={giveStyles("/about")}
        onClick={() => handleLinkClick("/about")}
      >
        <ChakraLink as={ReactRouterLink} to="/about">
          About
        </ChakraLink>
      </Text>
      <Text
        style={giveStyles("contact")}
        onClick={() => handleLinkClick("contact")}
      >
        <ChakraLink onClick={() => scrollToSection(contact)}>
          Contact Us
        </ChakraLink>
      </Text>

      {user ? (
        <Button as={ReactRouterLink} to="/profile">
          Profile
        </Button>
      ) : (
        <Button as={ReactRouterLink} to="/users">
          Login
        </Button>
      )}
    </Box>
  );
};

export default Navbar;
