import React, { useState, useEffect } from "react"

import { GoogleMap } from "@react-google-maps/api"

import MapMarkers from "./MapMarkers"

const Map = ({ places, country, type, childClicked, setChildClicked }) => {
  const [center, setCenter] = useState({ lat: 51.44985, lng: -0.00395 })
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
      mapContainerStyle={{ width: "100vw", height: "100%" }}
      center={center}
      zoom={12}
      onLoad={() => console.log(center)}
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
