import React, { useEffect, useState } from "react"
// import MarkerInfo from "./MarkerInfo"

import CustomInfoWindow from "./CustomInfoWindow"
import MarkerInfo from "./MarkerInfo"

import { Marker, MarkerClusterer } from "@react-google-maps/api"

const MapContents = ({
  places,
  country,
  type,
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
        places
          ?.filter(
            (place) =>
              (!country || place.country.includes(country)) &&
              (!type || place.categories.includes(type))
          )
          .map((place, idx) => {
            return (
              <>
                <MarkerInfo
                  place={place}
                  clusterer={clusterer}
                  setChildClicked={setChildClicked}
                  childClicked={childClicked}
                />
              </>
            )
          })
      }
    </MarkerClusterer>
  )
}
export default MapContents
