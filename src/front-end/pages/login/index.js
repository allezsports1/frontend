import { useEffect, useState } from "react";
import {PAGE_LOGIN} from '../../constants';
import CustomButton from "../../../common/atoms/button";
import Input from "../../../common/atoms/input";
import CheckBox from "../../../common/atoms/checkbox";
import { Link } from "react-router-dom";
import './Login.scss';
import { useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../state/actions'
import { Box } from "@mui/material";
import Breadcrumb from '../../organisms/breadcrumbs'


const PageLogin = ()=> {
    const [remember,setRemember] = useState(false);
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();

    const loginResponse = useSelector((state)=>state.clientReducer?.loginResponse);

    useEffect(()=>{
        document.title = PAGE_LOGIN.TITLE;
    },[]);

    useEffect(()=>{
        console.log("loginResponse",loginResponse)
    },[loginResponse]);

    const login = ()=> {
        const endPoint = {
            username: username,
            password: password,
            remember: remember
        }
        dispatch(userLogin(endPoint))
    }

    const setUserProps = {
        type:"email",
        placeholder: "abc@xyz.com",
        isRequired: true,
        text: PAGE_LOGIN.USERNAME,
        value: username,
        inputChange: (e) => setUsername(e.target.value),
        name: 'email',
        iconName: "Person"
    }

    const setPassProps = {
        type:"password",
        placeholder: "••••••••",
        isRequired: true,
        text: PAGE_LOGIN.PASSWORD,
        value: password,
        inputChange:(e) => setPassword(e.target.value),
        name : 'password',
        iconName: "Pass"
    }

    const setButtonProps = {
        value:PAGE_LOGIN.LOGIN,
        btnClick: login,
        isDisabled: (username?.length && password?.length) ? false : true
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Breadcrumb title={PAGE_LOGIN.TITLE} />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="login_form field_wrap w-full lg:w-2/5 xl:w-2/5 sm:w-2/5 md:w-2/5 p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h3 className="title">{PAGE_LOGIN.TITLE}</h3>
                        <Input {...setUserProps} />
                        <Input {...setPassProps} />
                        <CheckBox remindMeText={PAGE_LOGIN.REMIND_ME} value={remember} rememberMe={()=>setRemember(!remember)} />  
                        <CustomButton {...setButtonProps} />
                        <div>
                        <Link className="link" to="/member-register">{PAGE_LOGIN.REGISTER}</Link>
                             <span className="slash">|</span>
                        <Link to="/forgot-passsword" className="link">{PAGE_LOGIN.FORGET_PASSWORD}</Link>
                        </div>
                </div>
            </div>
        </Box>
    )
}

export default PageLogin;