import { Link } from 'react-router-dom'
import './Breadcrumb.scss';
import { Box } from '@mui/material';


const Breadcrumb = ({
    title,
    class_name = ''
}) =>{

    return(<>
        <div className={`breadcrumb ${class_name}`} >
            <div className="container">
                <Box className="">
                    <Link to="/" title="Back to homepage">Home</Link> {">"} {title}
                </Box>
            </div> 
        </div>
        </>
    )
}

export default Breadcrumb;