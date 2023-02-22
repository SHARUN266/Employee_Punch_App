import React, { useEffect, useRef, useState } from "react";
import Button from "../../Components/Button/Button";
import ContentWrapper from "../../Components/contentWrapper/ContentWrapper";
import { GetTime } from "../../Utils/GetTime";
import "./style.scss";
import { MapContainer, TileLayer } from "react-leaflet";

import osm from "../../Utils/osm-providers";
import "leaflet/dist/leaflet.css";

function PunchIn() {
  const [center, setCenter] = useState({ lat: 27.142289, lng: 78.045411 });
  const ZOOM_LEVEL = 15;
  const mapRef = useRef();
 
  return (
    <ContentWrapper>
      <div className="container_login">
        <div className="left">
          <div className="content">
            <h1>Punch In</h1>
            <div className="time_date">
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
                <h3>{GetTime(new Date(), 0)} </h3>
              </div>
              <div className="left">
                <p>Out Time</p>

                <h3>{GetTime(new Date(), 9)}</h3>
              </div>
            </div>
            <p className="complete_time">
              You have complete your <span>4.5</span>{" "}
            </p>
            <Button >Time In</Button>
           
          </div>
        </div>
        <div className="right">
          <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer url={osm.maptiler.url} />
          </MapContainer>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default PunchIn;
