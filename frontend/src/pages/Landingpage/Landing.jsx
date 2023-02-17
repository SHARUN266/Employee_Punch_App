import React from "react";
import Img from "../../Components/LazyloadingImg/Img";
import "./style.scss";
import logo from "../../assets/Logo.jpg";
import video from "../../assets/LandingPage.mp4";
export default function Landing() {
  return (
    <div className="landing">
      <div className="left">
        <video className="video"  autoPlay  loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="right">
        <Img className={"logo"} src={logo} />
      </div>
    </div>
  );
}
