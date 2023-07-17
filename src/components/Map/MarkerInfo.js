import React, { useState } from "react"

import { Marker, MarkerClusterer } from "@react-google-maps/api"

import CustomInfoWindow from "./CustomInfoWindow"

import Circle from "../../icons/circle.svg"

export default function MarkerInfo({
  place,
  clusterer,
  setChildClicked,
  childClicked,
}) {
  const [infoOpen, setInfoOpen] = useState(false)

  const createKey = (location) => {
    return location.lat + location.long
  }

  const placeLat = place.geocodes.main.latitude
  const placeLong = place.geocodes.main.longitude
  const placeLatLng = { lat: placeLat, lng: placeLong }

  const { name, fsq_id } = place

  // const options = {
  //   imagePath: require("../../icons/circle.svg"), // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  // }

  const handleClickedMarker = (place) => {
    setChildClicked({
      id: fsq_id,
      name: name,
      lat: placeLat,
      lng: placeLong,
    })
    setInfoOpen(true)
  }
  console.log(placeLatLng)

  return (
    <>
      <Marker
        // options={options}
        onClick={() => handleClickedMarker(place)}
        key={createKey(place)}
        position={placeLatLng}
        clusterer={clusterer}
        icon={{ url: Circle, scale: 0.5 }}
      />
      {infoOpen && (
        <CustomInfoWindow name={place.name} position={placeLatLng} />
      )}
    </>
  )
}
