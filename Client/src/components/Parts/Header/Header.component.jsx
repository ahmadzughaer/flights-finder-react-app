import React from "react";
import logo from '../../../assets/images/Flight-Finder-Logo.png';
import './Header.style.css'
// import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
      <img className="Logo" src={logo} alt="logo"/>
      {/* <Link to="/login">log in</Link> */}
      {/* <Link href="#">sign up</Link> */}
    </div>
  );
}

export default Header;
