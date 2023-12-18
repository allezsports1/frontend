import { useEffect } from "react";
import {PAGE_LOGIN} from '../../constants';
import CustomButton from "../../../common/atoms/button";


const PageLogin = ()=> {

    useEffect(()=>{
        document.title = PAGE_LOGIN.TITLE;
    },[]);

   const setButtonProps = {
        value : PAGE_LOGIN.LOGIN
    }

    return(<>   
        <div className="text-red-400">Sanjeev</div>
        <CustomButton {...setButtonProps} />
    </>)
}

export default PageLogin;