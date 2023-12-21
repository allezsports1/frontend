import { useEffect, useState } from "react";
import {REGISTER_USER} from '../../constants';
import CustomButton from "../../../common/atoms/button";
import Input from "../../../common/atoms/input";
import Breadcrumb from '../../organisms/breadcrumbs'
import './register.scss';
import { isValidEmail } from "../../../common/helper/utils";
import { useDispatch, useSelector} from 'react-redux';
import { forget_Password } from '../../state/actions'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from "@mui/material";


const UserRegistration = ()=> {
    const [email,setEmail] = useState("");
    const dispatch = useDispatch();

    const forgetPasswordResponse = useSelector((state)=>state.clientReducer?.forgetPasswordResponse);

    useEffect(()=>{
        document.title = REGISTER_USER.TITLE;
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
        placeholder: "email",
        isRequired: true,
        text: "EMAIL",
        value: email,
        inputChange: (e) => setEmail(e.target.value),
        name: 'email',
        iconName: "Email",
    }

    const setConfirmEmailProps = {
        type:"email",
        placeholder: "Confirm Email",
        isRequired: true,
        text: "Confirm Email",
        value: email,
        inputChange: (e) => setEmail(e.target.value),
        name: 'confirm_email',
        iconName: "Email",
    }

    const setButtonProps = {
        value:REGISTER_USER.BUTTON_TEXT,
        btnClick: resetPassword,
        isDisabled: isValidEmail(email) ? false : true
    }

    return(<Box sx={{ flexGrow: 1 }}>
    <Breadcrumb title={REGISTER_USER.TITLE} />
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="register_form field_wrap w-full lg:w-2/5 xl:w-2/5 sm:w-2/5 md:w-2/5 p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h3 className="title">{REGISTER_USER.TITLE}</h3>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                        <Input {...setEmailProps} /> 
                        <Input {...setConfirmEmailProps} />
                        <CustomButton {...setButtonProps} />
                </div>
            </div>
            </Box>
    )
}

export default UserRegistration;