import React from 'react';
import Navbar from './Navbar';
import { Box } from '@chakra-ui/react';
import Home from './Users';


const MainPage = () => {
  return (
    <Box>
      <Navbar/>
      <Home/>
    </Box>
  )
}

export default MainPage
