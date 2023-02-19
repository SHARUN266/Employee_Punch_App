import React from "react";
import Logo from "../Logo/Logo";
import "./style.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div><h1>Logo</h1></div>
      <div  className="content">
        <span>Home</span>
        <span>Attendance</span>
        <span>About</span>
      </div>
      <div className="btn-con">
        <button>Sign in </button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
