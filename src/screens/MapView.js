import React, { useEffect, useState } from "react"

//material ui
import { Grid } from "@material-ui/core"

//components
import List from "../components/List/List"
import Map from "../components/Map/Map"

const MapView = ({
  places,
  country,
  setCountry,
  type,
  setType,
  latLng,
  setLatLng,
}) => {
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 })
  const [userLocationGranted, setUserLocationGranted] = useState(false)

  const [childClicked, setChildClicked] = useState({})

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
        setUserLocationGranted(true)
      })
    }
  }, [])

  return (
    <Grid container spacing={0} style={{ width: "100%" }}>
      <Grid item sm={12} md={5} order={{ sm: 12, md: 1 }}>
        <List
          latLng={latLng}
          setLatLng={setLatLng}
          places={places}
          type={type}
          setType={setType}
          country={country}
          setCountry={setCountry}
          childClicked={childClicked}
          setChildClicked={setChildClicked}
        />
      </Grid>
      <Grid item sm={12} md={7} order={{ sm: 1, md: 12 }}>
        <Map
          userLocation={userLocation}
          userLocationGranted={userLocationGranted}
          places={places}
          country={country}
          setCountry={setCountry}
          type={type}
          setType={setType}
          childClicked={childClicked}
          setChildClicked={setChildClicked}
        />
      </Grid>
    </Grid>
  )
}
export default MapView
