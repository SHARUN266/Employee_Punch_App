import React, { useState } from "react";
import ContentWrapper from "../../Components/contentWrapper/ContentWrapper";
import Img from "../../Components/LazyloadingImg/Img";
import "./style.scss";
import signup from "../../assets/SignUp.png";
import { signUp_utils } from "../../Utils/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { SignUp_User } from "../../Redux/Reducer/action";
function SignUp() {
  const { loading, error,errorMsg,auth,successMsg } = useSelector((state) => state.reducer);
   
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    employee_id: "",
    mobile_number: "",
    emplyee_designation: "",
    password: "",
  });
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(SignUp_User(user));
    e.target.reset()
  }
  return (
    <ContentWrapper>
      <div className="container">
        <div className="left">
          <Img className={"signup"} src={signup} />
        </div>
        <div className="right">
          <form className="signup_form" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            {signUp_utils.map((e, i) => (
              <div key={i} className="input_con">
                <label style={{ color: "grayText" }}>{e.label}</label>
                <br />
                <input
                  onChange={(e) => handleChange(e)}
                  name={e.name}
                  type={e.type}
                  placeholder={e.placeholder}
                  style={{ width: "25rem" }}
                />
              </div>
            ))}
            <input
              disabled={loading}
              className="submit"
              type={"submit"}
              value={"Submit"}
            />
            {
              auth && <p  style={{color:'green'}}   >{successMsg}</p>
            }
            {
              error && <p  style={{color:'red'}}   >{errorMsg}</p>
            }
            <p>
              Have already account? <span>Sign In</span>{" "}
            </p>
          </form>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default SignUp;
