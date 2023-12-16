import {Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './pages/about-us/AboutUs';
import NotFound from './organisms/not-found';
import Blogs from './pages/blogs/Blogs';


const RouteList = () =>{

    return(
        <>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<AboutUs />} path='/about-us'/>
            <Route element={<Blogs />} path='/blog'/>
            <Route path="*" element={<NotFound />} />
        </Routes>
        </>
        )
};

export default RouteList;