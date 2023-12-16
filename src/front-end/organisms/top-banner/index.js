import { Box } from '@mui/material';
import './topBanner.scss';
import TopBannerImage from './../';

const TopBanner = ({
    pageTitle = '',
    containerClass = '',
    
}) =>{

    return(<Box className={`top-banner ${containerClass}`} >
            <TopBannerImage 
            
            />
            {pageTitle}
    </Box>)
}

export default TopBanner;