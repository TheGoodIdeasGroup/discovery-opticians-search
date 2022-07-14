import React, { useState, useEffect } from "react"

import { GoogleMap, LoadScript } from "@react-google-maps/api"

import MapMarkers from "./MapMarkers"

const Map = ({ places, country, type, childClicked, setChildClicked }) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 })
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
    <LoadScript googleMapsApiKey="AIzaSyCcqv4vOhtTLGBXOesBWoL243Y1-BYAkYY">
      <GoogleMap
        mapContainerStyle={{ width: "100vw", height: "100%" }}
        center={center}
        zoom={5}
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
    </LoadScript>
  )
}
export default Map
