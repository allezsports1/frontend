
import './Input.scss';

import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';


const Input = ({
    placeholder,
    type="text",
    text="g",
    isRequired=false,
    inputChange,
    inlineClass='',
    name = '',
    iconName=''
}) =>{

    const showIcon = (iconType) =>{
        switch(iconType){
            case "Person":
                return <PersonIcon className='icon' />;
            case "Pass":
                return <PasswordIcon className='icon' />;
            case "Email":
                return <EmailIcon className='icon'/>;
            default:
                return <></>;
        }
    }



    return(
        <p className='form-row'>
            <label className="block">{text}</label>
            {iconName && showIcon(iconName)}
            <input name={name} type={type} onChange={inputChange}
            className={` ${inlineClass}`} 
            placeholder={placeholder} required={isRequired} 
            />
        </p>
    )
}

export default Input;

