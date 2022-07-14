import React, { useState } from "react"

import { Marker, MarkerClusterer } from "@react-google-maps/api"

import CustomInfoWindow from "./CustomInfoWindow"

export default function MarkerInfo({
  place,
  position,
  clusterer,
  setChildClicked,
  childClicked,
}) {
  const [infoOpen, setInfoOpen] = useState(false)

  const createKey = (location) => {
    return location.lat + location.long
  }

  const latLng = { lat: Number(place.lat), lng: Number(place.long) }

  const options = {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  }

  const handleClickedMarker = (place) => {
    setChildClicked({
      id: place.id,
      name: place.name,
      lat: place.lat,
      lng: place.long,
    })
    setInfoOpen(true)
  }

  return (
    <>
      <Marker
        options={options}
        onClick={() => handleClickedMarker(place)}
        key={createKey(place)}
        position={latLng}
        clusterer={clusterer}
      />
      {infoOpen && <CustomInfoWindow name={place.name} position={latLng} />}
    </>
  )
}
