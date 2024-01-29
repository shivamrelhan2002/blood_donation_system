import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, FormLabel, Input, InputRightElement, InputGroup, VStack, Button, useToast,Text } from '@chakra-ui/react';
import axios from 'axios';
import { Radio, RadioGroup } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react';



const SignupOrg = () => {
  const [show, setShow] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [loading,setLoading]=useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  // useEffect(()=>{
  //   const org=JSON.parse(localStorage.getItem("orgInfo"));
  //   if(org){
  //     navigate('/organisation');
  //   }
  // })

  const setImage = async(pics) => {
    // console.log(pics);

    if (pics === undefined) {
      console.log("Select an image");
      return;
    }

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
        setPic(data.url.toString());
        console.log(data);
      })
      setLoading(false);
    }

  const handleForm = async (e) => {
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

    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      };
      console.log(pic);
      const { data } = await axios.post("http://localhost:3000/organisation/register", { name, email, password, pic }, config);
      console.log(data);
      toast({
        title: 'Registration Successfull',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: "bottom"
      })

      localStorage.setItem("orgInfo", JSON.stringify(data));
      navigate("/home");
    }
    catch (err) {
      toast({
        title: 'Error occured',
        description: "Check again before signup",
        status: 'error',
        duration: 5000,
        isClosable: true,
        positon: "bottom"
      })
      // navigate("/");
    }
  }

  return (
    <VStack spacing="5px">
      <FormControl id="name">
        <FormLabel>Name:</FormLabel>
        <Input
          placeholder="Enter organisation name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Enter email:</FormLabel>
        <Input
          placeholder="Enter organisation email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
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
      <FormControl id="pic">
        <FormLabel>Upload your picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </FormControl>
      <Button colorScheme='green' width="30%"
        onClick={handleForm} mt={6} isDisabled={loading?true:false} >
          {loading?<Spinner/>:"Sign Up"}
        </Button>
    </VStack>
  )
}

export default SignupOrg
