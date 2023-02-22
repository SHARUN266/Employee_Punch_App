import React, { useEffect, useRef, useState } from "react";
import Button from "../../Components/Button/Button";
import ContentWrapper from "../../Components/contentWrapper/ContentWrapper";
import { GetTime } from "../../Utils/GetTime";
import "./style.scss";
import { Map, TileLayer ,Marker, Popup} from "react-leaflet";
import L from "leaflet"
import osm from "../../Utils/osm-providers";
import "leaflet/dist/leaflet.css";
import useGeolocation from "../../Utils/useGeolocation";
const markerIcon=new L.Icon({
  iconUrl:"https://img.icons8.com/color/1x/map-pin.png",
  iconSize:[35,45],
  iconAnchor:[17,45],
  popupAnchor:[0,-46]
})
function PunchIn() {
  const location=useGeolocation()
  const [center, setCenter] = useState({ lat: 28.142289, lng: 93.045411 });
  const ZOOM_LEVEL = 15;
  const mapRef = useRef();
  function handleSubmit(){
    if (location.loaded && !location.error) {
   
    mapRef.current.leafletElement.flyTo(
      [location.coordinates.lat, location.coordinates.lng],
      ZOOM_LEVEL,
      { animate: true }
    );
  } else {
    alert(location.error.message);
  }
 }
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
            <Button onClick={handleSubmit} >Time In</Button>
           
          </div>
        </div>
        <div className="right">
        <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
              />

              {location.loaded && !location.error && (
                <Marker
                  icon={markerIcon}
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}
                ></Marker>
              )}
            </Map>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default PunchIn;

