import Navbar from "./Navbar";
import React,{useState,useEffect} from 'react';
import {Box} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { NAVIGATION, SITE_LOGO, SITE_TITLE } from "../../constants";

const Header = ()=>{
    const [scrollPosition, setScrollPosition] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      // console.log(scrollPosition);
        
    };
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(<Box className={`header_section grid grid-flow-row-dense gap-4 grid-cols-12 duration-500 ${scrollPosition >= 400 ? 'translate-y-0 bg-[white]' : ' bg-[white]'} fixed top-0 z-50  border-b-1 border-smoke-300 shadow-md py-2`}>
            <Box className="col-span-1">
                <Box className="w-[100px] py-3 flex items-center">
                    <img src={SITE_LOGO.main} alt={SITE_TITLE} className="object-contain cursor-pointer" onClick={()=> navigate(NAVIGATION.home.link)} />
                </Box>
            </Box>
            <Box className="col-span-11 ml-4 justify-self-end">
                <Navbar />
            </Box>
        </Box>)
    }

export default Header;
