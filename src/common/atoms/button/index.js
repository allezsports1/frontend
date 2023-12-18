import {Button} from '@mui/material';
import "./CustomButton.scss";


const CustomButton = ({
    variant = 'outlined',
    value = '',
    type="button"
}) => {

    return (
        <Button 
            className='outlined-button'
            variant={variant}
            type={type}>
                {value}
        </Button>
    )
}

export default CustomButton;


