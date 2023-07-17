import React, { useState, useEffect } from "react"

import { GoogleMap } from "@react-google-maps/api"

import MapMarkers from "./MapMarkers"
import mapStyles from "../mapStyles"
const Map = ({
  places,
  country,
  type,
  childClicked,
  setChildClicked,
  center,
  setCenter,
}) => {
  const [userLocationGranted, setUserLocationGranted] = useState(false)

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
        setUserLocationGranted(true)
      })
    }
  }, [])

  return (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "calc(100vh - 70px)",
        marginTop: 70,
      }}
      center={center}
      zoom={12}
      onLoad={() => console.log(center)}
      options={{ styles: mapStyles }}
    >
      <MapMarkers
        childClicked={childClicked}
        setChildClicked={setChildClicked}
        userLocationGranted={userLocationGranted}
        userLocation={center}
        filterByCountry={country}
        places={places}
        country={country}
        type={type}
      />
    </GoogleMap>
  )
}

export default Map
