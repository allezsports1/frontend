import Navbar from "./Navbar";
import React,{useState,useEffect} from 'react';
import {Box} from '@mui/material';

const Header = ()=>{
    const [scrollPosition, setScrollPosition] = useState(false);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
      // console.log(scrollPosition);
        
    };
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(<div className={`grid grid-flow-row-dense gap-4 grid-cols-12 duration-500 ${scrollPosition >= 400 ? 'translate-y-0 bg-[white]' : ' bg-[white]'} fixed top-0 z-50  border-b-1 border-smoke-300 shadow-md py-2`}>
    <Box className="container col-span-1">
        <div className="w-[100px] py-3 flex items-center">
            <img src="https://dev.allezsportz.com/wp-content/uploads/2019/06/Asset-8.svg" className="object-contain"/>
        </div>
    </Box>
    <Box className="container col-span-11 ml-4 justify-self-end">
        <Navbar />
    </Box>
</div>
)
}

export default Header;
{/* <div className={`flex justify-between items-center duration-500 ${scrollPosition >= 400 ? 'translate-y-0 bg-[white]' : ' bg-[white]'} fixed top-0 z-50 w-full  border-b-1 border-smoke-300 shadow-md py-2`}>
            <Box className="container ">
                <div className="w-[100px] py-3 flex items-center">
                <img src="https://dev.allezsportz.com/wp-content/uploads/2019/06/Asset-8.svg" className="object-contain"/>
                </div>
            </Box>
            <Box className="container border-solid border-2 border-sky-500">
                <Navbar />
            </Box>
            
    </div> */}
