import React from "react";
import  { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from '/Home';
import About from './About';
import Contact from './Contact';


const Header = () =>{
    return(
        <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  export default Header;