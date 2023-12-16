import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.scss';

const Navbar = () => {
  return (
      <nav className="navbar">
        <ul className='menu'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="sub">
            <Link to="/about-us">About Us</Link>
            <ul>
              <li></li>
            </ul>
          </li>
          <li className="sub">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar