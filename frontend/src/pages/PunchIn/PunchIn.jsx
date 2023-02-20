import React from "react";
import Button from "../../Components/Button/Button";
import ContentWrapper from "../../Components/contentWrapper/ContentWrapper";
import { GetTime } from "../../Utils/GetTime";
import "./style.scss";
function PunchIn() {
  return (
    <ContentWrapper>
      <div className="container_login">
        <div className="left">
          <div className="content">
            <h1>Punch In</h1>
            <div>
              <h3>{GetTime(new Date(), 0)}</h3>
              <p>
                {new Date().toLocaleString("en-US", { weekday: "long" })},{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="time_record">
              <div className="left">
                <p>In Time</p>
                <h6>{GetTime(new Date(), 0)} </h6>
              </div>
              <div className="right">
                <p>Out Time</p>
                <h6>
                  {GetTime(new Date(), 8)}
                  <span>pm</span>{" "}
                </h6>
              </div>
            </div>
            <p>
              You have complete your <span>4.5</span>{" "}
            </p>
            <Button>Time In</Button>
          </div>
        </div>
        <div className="right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default PunchIn;
