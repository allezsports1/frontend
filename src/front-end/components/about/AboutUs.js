import { PAGE_ABOUT_US } from "../../constants";
import CustomAccordions from "../../../common/atoms/CustomAccordions";
import { Box } from "@mui/material";
import { useDispatch } from 'react-redux'
import { getAboutUsContent } from '../../state/actions';
import {useSelector} from 'react-redux'
import { useEffect, useState } from 'react';
import './AboutUs';


const AboutUs = () => {
    const [data,setData] = useState([]);
    const dispatch = useDispatch();
    const dataResponse = useSelector((state)=>state.clientReducer?.contactUsResponse);

    useEffect(()=>{
        !data?.data && dispatch(getAboutUsContent())
    },[dispatch]);

    useEffect(()=>{
        dataResponse?.length && setData([...dataResponse]);
    },[dataResponse]);

    const setProps = {
        data: data,
        isOpen: true,
        containerClass:'aboutAccordionBox'
    }
    return(<div className="">
                <Box className="">{PAGE_ABOUT_US.TITLE}</Box>
                <div className="">
                    <CustomAccordions {...setProps} />
                </div>
            </div>)
      
}

export default AboutUs;