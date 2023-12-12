import { PAGE_ABOUT_US } from "../../constants";
import CustomAccordions from "../../../common/atoms/CustomAccordions";
import { Box } from "@mui/material";
import './AboutUs';

const dataResponse = [
    {
        question: "How do I purchase?",
        answer : "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Ullamc olaboris nisi ut aliquip ex!"
    },
    {
        question: "Can I cancel or change my order?",
        answer : "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Ullamc olaboris nisi ut aliquip ex!"
    },
    {
        question: "What are the dilivery types?",
        answer : "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Ullamc olaboris nisi ut aliquip ex!"
    }
];

const AboutUs = () => {
    

    const setProps = {
        data: dataResponse,
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