import React from "react";
import ContentWrapper from "../../Components/contentWrapper/ContentWrapper";
import Img from "../../Components/LazyloadingImg/Img";
import "./style.scss";
import signup from "../../assets/15.jpg";
import { Login_utils } from "../../Utils/Login";
function Login() {
  return (
    <ContentWrapper>
      <div className="container_login">
        <div className="left">
          <Img className={"signup"} src={signup} />
        </div>
        <div className="right">
          <form className="signup_form">
            <h1>Login</h1>
            {Login_utils.map((e) => (
              <div className="input_con">
                <label style={{ color: "grayText" }}>{e.label}</label>
                <br />
                <input
                  name={e.name}
                  type={e.type}
                  placeholder={e.placeholder}
                  style={{ width: "25rem" }}
                />
              </div>
            ))}
            <input className="submit" type={"submit"} value={"Submit"} />
            <p>
              You don't have account? <span>Sign Up</span>{" "}
            </p>
          </form>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Login;
