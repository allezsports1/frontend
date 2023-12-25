import {Routes , Route } from 'react-router-dom';
import { NAVIGATION } from './constants';
import Home from './components/Home';
import AboutUs from './pages/about-us';
import NotFound from './organisms/not-found';
import Blogs from './pages/blogs/Blogs';
import PageLogin from './pages/login';
import ForgotPassword from './pages/forgot-passsword';
import UserRegistration from './pages/register';


const RouteList = () =>{

    return(<Routes>
            <Route element={<Home/>} path={NAVIGATION.home.link} />
            <Route element={<AboutUs />} path='/about-us'/>
            <Route element={<Blogs />} path={NAVIGATION.blogs.link} />
            <Route element={<PageLogin />} path={NAVIGATION.login.link} />
            <Route element={<ForgotPassword />} path={NAVIGATION.login.link} />
            <Route element={<UserRegistration />} path={NAVIGATION.register.link} />
            <Route element={<NotFound />} path="*" />
        </Routes>)
};

export default RouteList;