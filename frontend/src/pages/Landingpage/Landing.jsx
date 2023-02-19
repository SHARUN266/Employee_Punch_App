import React from "react";
import Img from "../../Components/LazyloadingImg/Img";
import "./style.scss";

import video from "../../assets/creative-team.png";

import "react-awesome-button/dist/styles.css";

export default function Landing() {
  return (
    <div className="landing">
      <div className="left">
        <Img className={"leftImg"} src={video} />
      </div>
      <div className="right">
        <button class="button-66" role="button">
          {" "}
          <span>Get Started</span>{" "}
        </button>
      </div>
    </div>
  );
}
