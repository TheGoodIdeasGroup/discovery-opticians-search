import React, { useState } from "react"
// import MarkerInfo from "./MarkerInfo"

import MarkerInfo from "./MarkerInfo"

import { MarkerClusterer } from "@react-google-maps/api"
import ClusterIcon from "../../icons/m1.png"

const MapContents = ({
  places,

  childClicked,
  setChildClicked,
}) => {
  const [infoOpen, setInfoOpen] = useState(false)

  const styles = [
    {
      url: ClusterIcon,
      height: 53,
      lineHeight: 53,
      width: 53,
    },
    {
      url: ClusterIcon,
      height: 56,
      lineHeight: 56,
      width: 56,
    },
    {
      url: ClusterIcon,
      height: 66,
      lineHeight: 66,
      width: 66,
    },
    {
      url: ClusterIcon,
      height: 78,
      lineHeight: 78,
      width: 78,
    },
    {
      url: ClusterIcon,
      height: 90,
      lineHeight: 90,
      width: 90,
    },
  ]

  return (
    <MarkerClusterer styles={styles}>
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
