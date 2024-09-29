import React from 'react';
import {Link} from "react-router-dom"
import'./Navbar.css';
import ACMLogo from '../../assets/images/ACM_Logo.png'

const Navbar = () => {
  return (
    <div className="navbar"> 
        <div className ="logo">
            <img src={ACMLogo} alt="ACM"></img>
        </div>
        <nav className="navbar-menu">
          <Link to="/" style={{color: "inherit", textDecoration: "none"}}>Home</Link>
          <Link to="/about" style={{color: "inherit", textDecoration: "none"}}>About Us</Link>
          <Link to="/theme" style={{color: "inherit", textDecoration: "none"}}>Theme</Link>
        </nav>
        <div className="navbar-right">
        </div>
    </div>
  )
}

export default Navbar;