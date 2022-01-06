import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Flight-Finder-Logo.png";
import "./Header.style.css";

function Header() {
  return (
    <div className="Header">
      <div>
        <Link  className="NavLink"to={"/"}>Home</Link>
      </div>
      <div className="LogoContainer">
        <Link to={"/"}>
          <img className="Logo" src={logo} alt="logo" />
        </Link>
        <h2 className="Text">Enjoy the journey</h2>
      </div>
      <div >
        <Link className="NavLink" to={"/about"}>About</Link>
      </div>
    </div>
  );
}

export default Header;
