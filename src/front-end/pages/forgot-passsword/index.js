import { useEffect, useState } from "react";
import {PAGE_FORGET_PASSWORD} from '../../constants';
import CustomButton from "../../../common/atoms/button";
import Input from "../../../common/atoms/input";
import { Typography, Box } from '@mui/material';
import './forgot-password.scss';
import { isValidEmail } from "../../../common/helper/utils";
import { useDispatch, useSelector} from 'react-redux';
import { forget_Password } from '../../state/actions'
import Breadcrumb from '../../organisms/breadcrumbs'


const ForgotPassword = ()=> {
    const [email,setEmail] = useState("");
    const dispatch = useDispatch();

    const forgetPasswordResponse = useSelector((state)=>state.clientReducer?.forgetPasswordResponse);

    useEffect(()=>{
        document.title = PAGE_FORGET_PASSWORD.TITLE;
    },[]);

    useEffect(()=>{
        console.log("forgetPasswordResponse",forgetPasswordResponse)
    },[forgetPasswordResponse]);

    const resetPassword = ()=> {
        const endPoint = {
            email:email
        }
        dispatch(forget_Password(endPoint))
    }

    const setEmailProps = {
        type:"email",
        placeholder: "abc@xyz.in",
        isRequired: true,
        text: PAGE_FORGET_PASSWORD.EMAIL,
        value: email,
        inputChange: (e) => setEmail(e.target.value),
        name: 'email',
        iconName: "Email",
    }

    const setButtonProps = {
        value:PAGE_FORGET_PASSWORD.FORGET_PASSWORD,
        btnClick: resetPassword,
        isDisabled: isValidEmail(email) ? false : true
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
        <Breadcrumb title={PAGE_FORGET_PASSWORD.TITLE} />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="reset_password_form field_wrap w-full lg:w-2/5 xl:w-2/5 sm:w-2/5 md:w-2/5 p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h3 className="title">{PAGE_FORGET_PASSWORD.FORGET_YOUR_PASSWORD}</h3>
                        <Typography className="reset_password_info">{PAGE_FORGET_PASSWORD.INFO}</Typography>
                        <Input {...setEmailProps} /> 
                        <CustomButton {...setButtonProps} />
                </div>
            </div>
        </Box>
    )
}

export default ForgotPassword;