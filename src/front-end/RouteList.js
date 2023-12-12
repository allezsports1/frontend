import {Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/about/AboutUs';
import NotFound from './organisms/not-found';


const RouteList = () =>{

    return(
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<AboutUs />} path='/about-us'/>
            <Route path="*" element={<NotFound />} />
        </Routes>
        )
};

export default RouteList;