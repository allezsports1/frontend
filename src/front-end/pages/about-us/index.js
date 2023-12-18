import { PAGE_ABOUT_US } from "../../constants";
import CustomAccordions from "../../../common/atoms/CustomAccordions";
import { Box } from "@mui/material";
import { useDispatch } from 'react-redux'
import { getAboutUsContent } from '../../state/actions';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import TopBanner from '../../organisms/top-banner';
import './AboutUs.scss';
const style = {backgroundImage:"url('/assets/images/bg_top_heading.jpg')"}



const AboutUs = () => {
    const [data,setData] = useState([]);
    const dispatch = useDispatch();
    const dataResponse = useSelector((state)=>state.clientReducer?.contactUsResponse);

    useEffect(()=>{
        dispatch(getAboutUsContent())
    },[dispatch]);

    useEffect(()=>{
        dataResponse?.length && setData([...dataResponse]);
    },[dataResponse]);

    const setProps = {
        data: data,
        isOpen: true,
        containerClass:'aboutAccordionBox'
    }
    return(<div className="full-width">
                <TopBanner 
                    pageTitle={PAGE_ABOUT_US?.TITLE} 
                    style={style}
                    class_name="breadcrumb-background"
                />
                <Box className="container">
                    <CustomAccordions {...setProps} />
                </Box>
            </div>)
      
}

export default AboutUs;