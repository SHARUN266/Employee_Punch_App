import React, { useState } from "react";
import ContentWrapper from "../../Components/contentWrapper/ContentWrapper";
import Img from "../../Components/LazyloadingImg/Img";
import "./style.scss";
import signup from "../../assets/15.jpg";
import { Login_utils } from "../../Utils/Login";
import { useDispatch, useSelector } from "react-redux";
import { Login_User } from "../../Redux/Reducer/action";
function Login() {
  const { loading } = useSelector((state) => state.reducer);

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    employee_id: "",

    password: "",
  });
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(Login_User(user));
    e.target.reset()
  }
  return (
    <ContentWrapper>
      <div className="container_login">
        <div className="left">
          <Img className={"signup"} src={signup} />
        </div>
        <div className="right">
          <form className="signup_form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            {Login_utils.map((e,i) => (
              <div key={i} className="input_con">
                <label style={{ color: "grayText" }}>{e.label}</label>
                <br />
                <input
                  name={e.name}
                  onChange={(e) => handleChange(e)}
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
