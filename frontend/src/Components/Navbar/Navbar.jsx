import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./style.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Logo />
      </div>
      <ul className="menuItems">
        <Link to="/">
          <li className="menuItem">Home</li>
        </Link>
        <Link to="/attendance">
        
        <li className="menuItem">Attendance</li>
        </Link>
        <li className="menuItem">Contact</li>
      </ul>
      <div className="btn-con">
        <Link to="/login">
          <button className="btn-1">Sign in </button>
        </Link>
        <Link to="/signup">
          <button className="btn-2">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
