import React,{useState,useEffect} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import classes from './navbar.scss';
const Navbar = () => {
  const[toggleNav,setToggleNav] = useState(false);
  const toggle = () =>{
    setToggleNav((p) => !p);
    // console.log(toggleNav)
  }

  const [traningMenu, setTraningMenu] = useState(false);
  const [liveMenu, setLiveMenu] = useState(false);
  const [sportsMenu, setSportsMenu] = useState(false);
  const [titleMenu, setTitleMenu] = useState(false);
  const [aboutMenu, setAboutMenu] = useState(false);

  const toggleTraningmenu = () => {
    setTraningMenu(!traningMenu);
  };
  const toggleLivemenu = () => {
    setLiveMenu(!liveMenu);
  };
  const toggleSportmenu = () => {
    setSportsMenu(!sportsMenu);
  };
  const toggleTitlemenu = () => {
    setTitleMenu(!titleMenu);
  };
  const toggleAboutmenu = () => {
    setAboutMenu(!aboutMenu);
  };
  // screens: {
  //   'sm': '640px',   // Small screens
  //   'md': '768px',   // Medium screens
  //   'lg': '1024px',  // Large screens (default "lg" breakpoint)
  //   'xl': '1280px',
  //   '2xl':'1440px',  // Extra-large screens
  // },
    return (
      <nav className="navbar w-full">
        <ul className='menu hidden md:hidden sm:hidden lg:block xl:block 2xl:block'>
          <li className="font-medium text-sm">
            <Link to="/" className={`text-[${classes.bgColor2}] hover:text-[${classes.bgColor2}]`}>Home</Link>
          </li>
          <li className="font-medium text-sm relative group">
            <Link to="/" className={`text-dark hover:text-[${classes.bgColor2}]`}>Tranings <ArrowDropDownIcon/></Link>
            <ul className='border-gray-200 border absolute hidden w-[180px] space-y-2 bg-white left-2 top-[50px] shadow-md group-hover:flex flex-col items-start '>
              <li className={`text-sm text-dark hover:text-[${classes.bgColor2}] font-medium flex justify-between border-b-2 p-1 border-gray-200 w-full`}><span>Upcoming trainings</span></li>
              <li className={`text-sm text-dark hover:text-[${classes.bgColor2}] font-medium flex justify-between border-b-2 p-1 border-gray-200 w-full`}><span>Past Trainings</span></li>
            </ul>
          </li>
          <li className="font-medium text-sm relative group">
            <Link to="/" className={`text-dark hover:text-[${classes.bgColor2}]`}>Live events <ArrowDropDownIcon/></Link>
            <ul className='border-gray-200 border absolute hidden w-[180px] space-y-2 bg-white left-2 top-[50px] shadow-md group-hover:flex flex-col items-start '>
              <li className={`text-sm text-dark hover:text-[${classes.bgColor2}] font-medium flex justify-between border-b-2 p-1 border-gray-200 w-full`}><span>Upcoming events</span></li>
              <li className={`text-sm text-dark hover:text-[${classes.bgColor2}] font-medium flex justify-between border-b-2 p-1 border-gray-200 w-full`}><span>Past events</span></li>
            </ul>
          </li>
          <li className="font-medium text-sm relative group">
            <Link to="/" className={`text-dark hover:text-[${classes.bgColor2}]`}>Sports Categories <ArrowDropDownIcon/></Link>
            <ul className='border-gray-200 border absolute hidden w-[180px] space-y-2 bg-white left-2 top-[50px] shadow-md group-hover:flex flex-col items-start '>
              <li className={`text-sm text-dark hover:text-[${classes.bgColor2}] font-medium flex justify-between border-b-2 p-1 border-gray-200 w-full`}><span>Tennis</span></li>
            </ul>
          </li>
          <li className="font-medium text-sm relative group">
            <Link to="/" className={`text-dark hover:text-[${classes.bgColor2}]`}>Title TK <ArrowDropDownIcon/></Link>
            <ul className='border-gray-200 border absolute hidden w-[180px] space-y-2 bg-white left-2 top-[50px] shadow-md group-hover:flex flex-col items-start '>
              <li className={`text-sm text-dark hover:text-[${classes.bgColor2}] font-medium flex justify-between border-b-2 p-1 border-gray-200 w-full`}><span>Coaches</span></li>
              <li className={`text-sm text-dark hover:text-[${classes.bgColor2}] font-medium flex justify-between border-b-2 p-1 border-gray-200 w-full`}><span>Academies</span></li>
            </ul>
          </li>
          <li className="font-medium text-sm relative group">
            <Link to="/" className={`text-dark hover:text-[${classes.bgColor2}]`}>About Us <ArrowDropDownIcon/></Link>
            <ul className='border-gray-200 border absolute hidden w-[180px] space-y-2 bg-white left-2 top-[50px] shadow-md group-hover:flex flex-col items-start '>
              <li className={`text-sm text-dark hover:text-[${classes.bgColor2}] font-medium flex justify-between border-b-2 p-1 border-gray-200 w-full`}><span>How it works</span></li>
              <li className={`text-sm text-dark hover:text-[${classes.bgColor2}] font-medium flex justify-between border-b-2 p-1 border-gray-200 w-full`}><span>News</span></li>
              <li className={`text-sm text-dark hover:text-[${classes.bgColor2}] font-medium flex justify-between border-b-2 p-1 border-gray-200 w-full`}><span>Blogs</span></li>
            </ul>
          </li>
          <li className={`sub text-sm text-dark hover:text-[${classes.bgColor2}] font-medium`}>
            <Link to="/blog">Contact us</Link>
          </li>
          <li className="sub flex items-center mt-[1px]  text-sm font-medium">
            <Link to="/member-login" className={`text-dark hover:text-[${classes.bgColor2}]`}>Login</Link>
            <span className='text-dark'>|</span>
            <Link to="/register" className={`text-dark hover:text-[${classes.bgColor2}]`}>Reigster</Link>
          </li>
          <li className="sub flex items-center h-[50px] mt-[4px]">
          <button className={`focus:outline-none bg-[${classes.bgColor2}] hover:bg-[white] text-[white]  hover:text-[${classes.bgColor2}] py-1 px-2 border border-[#e86c60] rounded-md duration-200 text-center`}>
           + create event
          </button>
          </li>
          <li className="sub">
            <Link to="/member-login">Login</Link>
          </li>
        </ul>
        <div className="lg:hidden md:block xl:hidden 2xl:hidden  sm:block">
        <ul className='menu flex items-center float-right right-[50px] relative'>
          <li className="sub flex items-center">
            <MenuIcon className='text-dark cursor-pointer' onClick={toggle}/>
          </li>
          <li className="sub flex items-center text-sm font-medium">
            <Link to="/member-login" className={`text-dark hover:text-[${classes.bgColor2}] `}>Login</Link>
          </li>
        </ul>
        </div>
        <div id="side-menu" className={`fixed top-0 ${toggleNav?'left-0':'left-[-350px]'} w-[300px] h-screen z-50 bg-[#27272a] px-5 py-4
    flex flex-col  text-white duration-300 overflow-scroll`}>
        <span className="text-right ml-[14px] text-4xl cursor-pointer"><CloseIcon onClick={toggle}/></span>
        <ul className='menu'>
          <li className={`text-[${classes.bgColor2}] text-sm flex items-center justify-between w-full hover:text-[${classes.bgColor2}] font-medium`}>
            <Link to="/">Home</Link>
            {/* <span className="cursor-pointer" >
        <ArrowRightIcon />
      </span> */}
      </li>
      <li className={`sub flex items-center justify-between w-full text-sm text-[white] hover:text-[${classes.bgColor2}] font-medium`}>
            <Link to="/about-us">Tranings</Link>
            <span className="cursor-pointer" onClick={toggleTraningmenu}><ArrowRightIcon/></span>
          </li>
          {traningMenu && (
        <div className="flex flex-col bg-dark p-1 ml-1">
          <ul className="menu flex flex-col items-start">
            <li className={`py-3 text-sm border-b-2 border-gray-600 w-full cursor-pointer text-white hover:text-[${classes.bgColor2}]`}>Upcoming trainings</li>
            <li className={`py-3 text-sm border-b-2 border-gray-600 w-full cursor-pointer text-white hover:text-[${classes.bgColor2}]`}>Past Trainings</li>
          </ul>
        </div>
      )}
          <li className={`sub flex items-center justify-between w-full text-sm text-[white] hover:text-[${classes.bgColor2}] font-medium`}>
            <Link to="/blog">Live events</Link>
            <span className="cursor-pointer" onClick={toggleLivemenu}><ArrowRightIcon/></span>
          </li>
          {liveMenu && (
        <div className="flex flex-col bg-dark p-1 ml-1">
          <ul className="menu flex flex-col items-start">
            <li className={`py-3 text-sm border-b-2 border-gray-600 w-full cursor-pointer text-white hover:text-[${classes.bgColor2}]`}>Upcoming events</li>
            <li className={`py-3 text-sm border-b-2 border-gray-600 w-full cursor-pointer text-white hover:text-[${classes.bgColor2}]`}>Past events</li>
          </ul>
        </div>
      )}
          <li className={`sub flex items-center justify-between w-full text-sm text-[white] hover:text-[${classes.bgColor2}] font-medium`}>
            <Link to="/blog">Sports Categories</Link>
            <span className="cursor-pointer" onClick={toggleSportmenu}><ArrowRightIcon/></span>
          </li>
          {sportsMenu && (
        <div className="flex flex-col bg-dark p-1 ml-1">
          <ul className="menu flex flex-col items-start">
            <li className={`py-3 text-sm border-b-2 border-gray-600 w-full cursor-pointer text-white hover:text-[${classes.bgColor2}]`}>Tennis</li>
          </ul>
        </div>
      )}
          <li className={`sub flex items-center justify-between w-full text-sm text-[white] hover:text-[${classes.bgColor2}] font-medium`}>
            <Link to="/blog">Title TK</Link>
            <span className="cursor-pointer" onClick={toggleTitlemenu}><ArrowRightIcon/></span>
          </li>
          {titleMenu && (
        <div className="flex flex-col bg-dark p-1 ml-1">
          <ul className="menu flex flex-col items-start">
            <li className={`py-3 text-sm border-b-2 border-gray-600 w-full cursor-pointer text-white hover:text-[${classes.bgColor2}]`}>Coaches</li>
            <li className={`py-3 text-sm border-b-2 border-gray-600 w-full cursor-pointer text-white hover:text-[${classes.bgColor2}]`}>Academies</li>
          </ul>
        </div>
      )}
          <li className={`sub flex items-center justify-between w-full text-sm text-[white] hover:text-[${classes.bgColor2}] font-medium`}>
            <Link to="/blog">About Us</Link>
            <span className="cursor-pointer" onClick={toggleAboutmenu}><ArrowRightIcon/></span>
          </li>
          {aboutMenu && (
        <div className="flex flex-col bg-dark p-1 ml-1">
          <ul className="menu flex flex-col items-start">
            <li className={`py-3 text-sm border-b-2 border-gray-600 w-full cursor-pointer text-white hover:text-[${classes.bgColor2}]`}>How it works</li>
            <li className={`py-3 text-sm border-b-2 border-gray-600 w-full cursor-pointer text-white hover:text-[${classes.bgColor2}]`}>News</li>
            <li className={`py-3 text-sm border-b-2 border-gray-600 w-full cursor-pointer text-white hover:text-[${classes.bgColor2}]`}>Blogs</li>
          </ul>
        </div>
      )}
          <li className={`sub flex items-center justify-between w-full text-sm text-[white] hover:text-[${classes.bgColor2}] font-medium`}>
            <Link to="/blog">Shop</Link>
            {/* <span className="cursor-pointer"><ArrowRightIcon/></span> */}
          </li>
          <li className={`sub flex items-center justify-between w-full text-sm text-[white] hover:text-[${classes.bgColor2}] font-medium`}>
            <Link to="/blog">Contact Us</Link>
            {/* <span className="cursor-pointer"><ArrowRightIcon/></span> */}
          </li>
          <li className="sub flex items-center h-[60px]">
          <button className={`focus:outline-none bg-[#e86c60] hover:bg-[white] text-[white]  hover:text-[${classes.bgColor2}] py-1 px-3 border border-[#e86c60] rounded-md duration-200 text-center`}>
           + create event
          </button>
          </li>
        </ul>
        </div>
      </nav>
  )
}

export default Navbar
