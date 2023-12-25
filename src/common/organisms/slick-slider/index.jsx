import Slider from "react-slick";
import { Box} from '@mui/material';
import './slick-slider.scss';
import React from 'react';

const SimpleSlider = ({
    setting = {},
    data = [],
    classes=''
}) =>{
    const sliderConfig = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        arrows: true,
        adaptiveHeight: true,
        ...setting
    };
    return (<Box className={classes}>
            <Slider {...sliderConfig}>
                <div className="items">1</div>
            </Slider>
    </Box>)
};

export default SimpleSlider;

