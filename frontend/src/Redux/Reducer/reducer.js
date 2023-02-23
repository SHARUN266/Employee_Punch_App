import * as actionTypes from "./actionType";

const initState = {
  loading: false,
  error: false,
  data: [],
  loadingMsg: "",
  errorMsg: "",
  successMsg: "",
  auth:false
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        successMsg: payload,
        loading: false,
        loadingMsg: "",
        error: false,
        errorMsg: "",
       
      };
    }
    case actionTypes.SIGNUP_ERROR: {
      return {
        ...state,
        error: true,
        errorMsg: payload,
      };
    }
    case actionTypes.SIGNUP_LOADING: {
      return {
        ...state,
        loading: true,
        loadingMsg: payload,

      };
    }
    case actionTypes.LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        loadingMsg: payload,
      };
    }
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        loadingMsg: "",
        error: false,
        errorMsg: "",
        data:payload,
        auth:true
      };
    }
    case actionTypes.LOGIN_ERROR:{
      return {
        ...state,
        error: true,
        errorMsg: payload,

      }
    }
    default:
      return state;
  }
};
