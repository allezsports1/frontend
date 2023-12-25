import { Link } from 'react-router-dom'
import './Breadcrumb.scss';
import { Box } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { NAVIGATION } from '../../constants';


const Breadcrumb = ({
    title,
    class_name = ''
}) =>{

    return(<div className={`breadcrumb ${class_name}`} >
            <div className="container">
                <Box className="">
                    <Link to={NAVIGATION.home.link} title={NAVIGATION.home.name}>{NAVIGATION.home.name}</Link> 
                    <KeyboardArrowRightIcon className='arrowRightIcon' />
                    {title}
                </Box>
            </div> 
        </div>)
}

export default Breadcrumb;