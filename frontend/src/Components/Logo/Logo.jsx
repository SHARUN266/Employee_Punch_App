import React from "react";
import Img from "../LazyloadingImg/Img";
import logo from "../../assets/Logo.jpg";
import "./style.scss";
export default function Logo() {
  return <Img className={"logo"} src={logo} />;
}
