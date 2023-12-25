import { Box, Typography} from '@mui/material';
import './hero-banner.scss';
import { PAGE_HOME } from '../../constants';
import SimpleSlider from '../../../common/organisms/slick-slider';
import HeroSearch from '../hero-search';

const HeroBanner = ()=> {


    const setSliderProps = {
        data : [],
        setting : {
            autoplay : true,
            pauseOnHover: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: 'items_button'
        }   
    }

    return(<Box className="hero-section">
            <Box className="background-overlay"></Box>
            <Box className="container search-widget justify-center align-middle flex-row">
                <Typography className='hero_banner_title' variant="h2" color="initial">{PAGE_HOME.HeroBannerTitle}</Typography>
                <Typography className='hero_banner_sub_title' variant="h2" color="initial">{PAGE_HOME.slogan}</Typography>
                <Box className="search_container">
                    <HeroSearch />
                </Box>
                <Box className="slider-container">
                    <SimpleSlider {...setSliderProps} />
                </Box>
            </Box>
        </Box>)
}

export default HeroBanner;