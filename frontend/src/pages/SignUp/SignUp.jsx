import React from "react";
import ContentWrapper from "../../Components/contentWrapper/ContentWrapper";
import Img from "../../Components/LazyloadingImg/Img";
import "./style.scss";
import signup from "../../assets/SignUp.png";
import { signUp_utils } from "../../Utils/SignUp";
function SignUp() {
  return (
    <ContentWrapper>
      <div className="container">
        <div className="left">
          <Img className={"signup"} src={signup} />
        </div>
        <div className="right">
          <form className="signup_form"   >
            {signUp_utils.map((e) => (
              <div className="input_con">
                <label>{e.label}</label>
                <br/>
                <input  name={e.name} type={e.type} placeholder={e.placeholder} style={{width:"25rem"}} />
              </div>
            ))}
            <input className="submit" type={"submit"} value={"Submit"}/>
          <p>Have already account? <span>Sign In</span>  </p>
          </form>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default SignUp;
