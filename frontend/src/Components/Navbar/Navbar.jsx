import React from "react";
import Logo from "../Logo/Logo";
import "./style.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Logo/>
      </div>
      <ul className="menuItems">
        <li className="menuItem">Home</li>
        <li className="menuItem">About</li>
        <li className="menuItem">Contact</li>
        
      </ul>
      <div className="btn-con">
        <button  className="btn-1">Sign in </button>
        <button  className="btn-2">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
