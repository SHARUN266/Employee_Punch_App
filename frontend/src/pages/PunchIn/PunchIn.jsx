import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import ContentWrapper from "../../Components/contentWrapper/ContentWrapper";
import { GetTime } from "../../Utils/GetTime";
import "./style.scss";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
function PunchIn() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (location) {
      // Handle form submission and store location data in database or backend
      console.log("Location:", location);
    } else {
      setError("Please allow location access to record attendance.");
    }
  };

  const handleApiLoaded = (map, maps) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(location);
          const marker = new maps.Marker({
            position: location,
            map,
            title: "Your Location",
          });
        },
        (error) => {
          setError(`Location access denied: ${error.message}`);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
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
            <Button onClick={handleSubmit}>Time In</Button>
            {error && <p>{error}</p>}
          </div>
        </div>
        <div className="right">
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDm7D2xCvXv_byiQBw2fxPk9g-5BaJoa9k' }}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {location && <AnyReactComponent lat={location.lat} lng={location.lng} text="You are here" />}
      </GoogleMapReact>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe> */}
        </div>
      </div>
    </ContentWrapper>
  );
}

export default PunchIn;
