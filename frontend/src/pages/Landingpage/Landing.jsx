import React from "react";
import Img from "../../Components/LazyloadingImg/Img";
import "./style.scss";
import logo from "../../assets/Logo.jpg";
import video from "../../assets/creative-team.png";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import {GrFormNext} from "react-icons/gr"
export default function Landing() {
  return (
    <div className="landing">
      <div className="left">
        <Img className={"logo"} src={logo} />
       <Img className={"leftImg"} src={video}/>
      </div>
      <div className="right">
          <button class="button-66" role="button">Get Started</button>
      </div>
    </div>
  );
}
