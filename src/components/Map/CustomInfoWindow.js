import React from "react"

import { InfoWindow } from "@react-google-maps/api"

import { Typography } from "@material-ui/core"

const CustomInfoWindow = ({ position, name }) => {
  return (
    <InfoWindow position={position}>
      <div
        style={{
          background: `white`,
          padding: 2,
        }}
      >
        <Typography variant="subtitle1">{name}</Typography>
      </div>
    </InfoWindow>
  )
}
export default CustomInfoWindow
