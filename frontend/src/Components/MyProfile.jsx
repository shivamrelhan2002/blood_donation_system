import React, { useState } from 'react';
import { Box, Icon, IconButton, Text } from '@chakra-ui/react';
import { DataState } from '../Context/DataProvider';
import { Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { FormControl, FormLabel, Input, InputRightElement, InputGroup, Stack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { Select } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import Settings from './Settings';
import { ArrowBackIcon,AddIcon } from '@chakra-ui/icons';
import {IoIosCamera} from 'react-icons/io';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import ProfileBox from './ProfileBox';


const MyProfile = () => {

  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, setUser } = DataState();
  const toast = useToast();
  const navigate = useNavigate();
  // console.log(process.env.REACT_APP_TITLE);

  const changeImage = async (pics) => {
    // console.log(pics);

    if (pics === undefined) {
      console.log("Select an image");
      return;
    }
    console.log("Uploading Image");
    setLoading(true);
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "chat-app");
    data.append("cloud_name", "dkihf3dtx");
    await fetch("https://api.cloudinary.com/v1_1/dkihf3dtx/image/upload", {
      method: "POST",
      mode: "cors",
      body: data
    }).then((res) => res.json())
      .then((data) => {
        setProfile(data.url.toString());
        console.log(data.url.toString());
        setImage(data.url.toString());
      })
    setLoading(false);
  }

  const setImage = async (image) => {
    console.log("Setting profile image");
    console.log("New pic", image);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
      const { data } = await axios.put("http://localhost:3000/users/update", {
        pic: image
      }, config);
      console.log("Updated Pic", data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUser(data);
    }
    catch (err) {
      console.log("Image not updated in database");
    }
  }

  return (
    <Box
      display={"flex"}
      w={"100%"}
      h={"100vh"}
    >
      <Box
        border={"2px solid #f1e9eb"}
        w={"20%"}
        h={"100vh"}
        backgroundColor={"white"}
      >
        <Image src={user.pic} alt='Dan Abramov' width={"80%"} height={"250px"} border={"2px solid #f1e9eb"} boxShadow={"2xl"} borderRadius={"50%"} mt={"100px"} mx={"auto"} backgroundSize={"contain"} />
        <FormControl id="profile">
          <FormLabel mx={"80%"} >
          <Icon as={IoIosCamera} boxSize={8} color="teal.500" cursor={"pointer"} />
            <Input
              type="file"
              p={1.5}
              accept="image/*"
              onChange={(e) => changeImage(e.target.files[0])}
              display={"none"}
            />
          </FormLabel>
        </FormControl>
        <Button w={"80%"} h={"50px"} m={3} mx={"25px"} backgroundColor={"#1c84ff"} fontSize={"2xl"} fontFamily={"Work sans"} onClick={() => setProfile(true)} >Profile</Button>
        <Button w={"80%"} h={"50px"} m={3} mx={"25px"} backgroundColor={"#1c84ff"} fontSize={"2xl"} fontFamily={"Work sans"} onClick={() => setProfile(false)}  >Settings</Button>
      </Box>
      <Box
        border={"2px solid #f1e9eb"}
        w={"80%"}
        h={"100vh"}
      // backgroundColor={"cyan"}
      >
        <Box
          w={"100%"}
          h={"15vh"}
          // border={"2px solid red"}
          display={"flex"}
          justifyContent={"space-between"}
          backgroundColor={"#bf2229"}
        >
          <Text fontSize={"6xl"} fontFamily={"cursive"} mx={50} color={"white"} >Profile</Text>
          <IconButton as={Button} onClick={() => navigate(-1)} color={"white"} backgroundColor={"#bf2229"} size={"lg"} icon={<ArrowBackIcon />} ></IconButton>
        </Box>
        {user && profile ? <ProfileBox /> : <Settings />}
        {/* Initial profile modal */}
      </Box>
    </Box>
  )
}

export default MyProfile;
