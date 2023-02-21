import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./actionType";
import axios from "axios";
const BASE_URL = "http://localhost:3000";
export const SignUp_User = (user) => async (dispatch) => {
  dispatch({ type: SIGNUP_LOADING, payload: "Loading..." });
 
  try {
   let data= await axios.post(`${BASE_URL}/signup/user`, user);
   console.log(data)
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: "You account created successfully!",
    });
   
  } catch (e) {
    dispatch({ type: SIGNUP_ERROR, payload: e.message });
  }
};