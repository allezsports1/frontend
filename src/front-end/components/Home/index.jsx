import React from 'react';
import { Box} from '@mui/material';
import './home.scss';
import HeroBanner from '../../organisms/hero-banner';

const Home = () => {

  const setPropsHeroBanner = {
      
  }

  return (<Box className="home">
          <HeroBanner {...setPropsHeroBanner} />
    </Box>)
}

export default Home