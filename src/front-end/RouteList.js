import {Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './pages/about-us';
import NotFound from './organisms/not-found';
import Blogs from './pages/blogs/Blogs';
import PageLogin from './pages/login';
import ForgotPassword from './pages/forgot-passsword';
import UserRegistration from './pages/register';


const RouteList = () =>{

    return(<Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<AboutUs />} path='/about-us'/>
            <Route element={<Blogs />} path='/blog'/>
            <Route element={<PageLogin />} path='/member-login'/>
            <Route element={<ForgotPassword />} path='/forgot-passsword' />
            <Route element={<UserRegistration />} path='/member-register' />
            <Route path="*" element={<NotFound />} />
        </Routes>)
};

export default RouteList;