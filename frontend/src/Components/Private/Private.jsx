import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Private({ children }) {
  const { auth } = useSelector((state) => state.reducer);
  let user=JSON.parse(localStorage.getItem('user'))
  if (!user?.userToken&&!auth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default Private;
