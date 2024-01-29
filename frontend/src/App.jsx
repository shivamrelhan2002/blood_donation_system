import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DataProvider from './Context/DataProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Users from './Components/Users';
import Home from './Components/Home';
import MyProfile from './Components/MyProfile';
import About from './Components/About';
// import Contact from './Components/Contact';
import RequestPage from './Components/RequestPage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import DashBoard from './Components/Organisation/DashBoard';


function App() {
  return (
    <Router>
    <DataProvider> 
        <Routes>
          {/* <Route path="/users" element={<Users/>} /> */}
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/organisation" element={<DashBoard/>} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/profile" element={<MyProfile/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/contact" element={<Contact/>} /> */}
          <Route path="/services/donor" element={<RequestPage/>} />
        </Routes>
    </DataProvider>
      </Router>
  )
}

export default App
