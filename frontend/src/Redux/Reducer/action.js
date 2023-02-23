import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from "./actionType";
import axios from "axios";
const BASE_URL = "http://localhost:3000";
export const SignUp_User = (user) => async (dispatch) => {
  dispatch({ type: SIGNUP_LOADING, payload: "Loading..." });

  try {
    await axios.post(`${BASE_URL}/signup/user`, user);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: "You account created successfully!",
    });
  } catch (e) {
    dispatch({ type: SIGNUP_ERROR, payload: e.message });
  }
};

export const Login_User = (user, nav) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING, payload: "Loading..." });
  try {
    let { data } = await axios.post(`${BASE_URL}/signup/login`, user);

    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
      nav("/attendance");
      dispatch({
        type: LOGIN_SUCCESS,
        payload: "Login successfully!",
      });
    }
  } catch (e) {
    dispatch({ type: LOGIN_ERROR, payload: e.message });
  }
};
