import React, { useEffect, useState } from "react"

import { GoogleMap, Marker } from "@react-google-maps/api"

const SingleMap = ({ lat, long }) => {
  const [singleMapPosition, setSingleMapPostition] = useState({
    lat: 0,
    lng: 0,
  })

  const setTheMap = () => {
    setSingleMapPostition({ lat, lng: long })
  }

  useEffect(() => {
    setTheMap()
  }, [])

  if (singleMapPosition) {
    return (
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{ lat: lat, lng: long }}
        zoom={18}
      >
        <Marker width="30" height={40} position={{ lat: lat, lng: long }} />
      </GoogleMap>
    )
  }
}
export default SingleMap
