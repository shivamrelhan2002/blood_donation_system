import {createContext, useContext, useEffect, useState} from 'react';
import {useNavigate,useLocation} from 'react-router-dom';

const DataContext=createContext();

const DataProvider=({children})=>{
    const [user,setUser]=useState("");
    const [org,setOrg]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        console.log('Setting user..');
        const userInfo=JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);
        console.log('Setting org..');
        const orgInfo=JSON.parse(localStorage.getItem("orgInfo"));
        setOrg(orgInfo);

        // if(!userInfo){
        //     navigate("/");
        // }
    },[navigate]);

    return (<DataContext.Provider value={{user,setUser,org,setOrg}}>{children}</DataContext.Provider>)
}

export const DataState=()=>{
    return useContext(DataContext);
}

export default DataProvider;