import React, { useState } from "react"
// import MarkerInfo from "./MarkerInfo"

import MarkerInfo from "./MarkerInfo"

import { MarkerClusterer } from "@react-google-maps/api"

const MapContents = ({
  places,

  childClicked,
  setChildClicked,
}) => {
  const [infoOpen, setInfoOpen] = useState(false)

  const options = {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  }

  return (
    <MarkerClusterer options={options}>
      {(clusterer) =>
        places?.map((place, idx) => {
          // console.log({ place, idx })
          return (
            <MarkerInfo
              key={idx}
              place={place}
              clusterer={clusterer}
              setChildClicked={setChildClicked}
              childClicked={childClicked}
            />
          )
        })
      }
    </MarkerClusterer>
  )
}
export default MapContents
