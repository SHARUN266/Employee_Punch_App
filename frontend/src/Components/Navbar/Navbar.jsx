import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./style.scss";
function Navbar() {
  const { auth } = useSelector((state) => state.reducer);
  console.log(auth);
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
        <Link to="/present">
          <li className="menuItem">Present Employee</li>
        </Link>
        <li className="menuItem">Contact</li>
      </ul>
      <div className="btn-con">
        {!auth ? (
        
          <>
            <Link to="/login">
              <button className="btn-1">Sign in </button>
            </Link>
            <Link to="/signup">
              <button className="btn-2">Sign Up</button>
            </Link>
          </>
        ) : (
          <Button>Log out</Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
