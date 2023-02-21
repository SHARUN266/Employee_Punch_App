import * as actionTypes from "./actionType";

const initState = {
  loading: false,
  error: false,
  data: [],
  loadingMsg: "",
  errorMsg: "",
  successMsg: "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        successMsg: payload,
        
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
    default:
      return state;
  }
};
