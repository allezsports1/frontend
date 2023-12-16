import { Box } from '@mui/material';
import { Link } from 'react-router-dom'
import './Breadcrumb.scss'

const Breadcrumb = ({
    title
}) =>{

    return(
        <Box className="breadcrumb">
            <div className="container">
                <Link to="/">Home</Link> {">"} {title}
            </div> 
        </Box>
    )
}

export default Breadcrumb;