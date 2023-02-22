import React, { useEffect, useState } from "react";

function useGeolocation() {
  const [location, setLocation] = useState({
    loaded: false,
    lat: "",
    lng: "",
  });
  const onSuccess=()=>{
    setLocation({
        loaded:true,
        coordinates:{
            lat:location.coords.latitude,
            lng:location.coords.longitude
        }
    })

  }
  const onError=error=>{
    setLocation({
        loaded:true,
        error,
    })
  }
  useEffect(() => {
    if (!("geolocation" in navigator)) {
     onError({
        code: 0,
        message: "Geolocation not supported",
      })

    }

    navigator.geolocation.getCurrentPosition(onSuccess,onError)
  }, []);

  return location;
}

export default useGeolocation;
