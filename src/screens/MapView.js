import React, { useEffect, useState } from "react"

//material ui
import { Grid } from "@material-ui/core"

//components
import List from "../components/List/List"
import Map from "../components/Map/Map"

import ChevronLeft from "../icons/chevron-left-solid.svg"
import ChevronRight from "../icons/chevron-right-solid.svg"

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
  const [center, setCenter] = useState({ lat: 51.44985, lng: -0.00395 })

  const [drawerOpen, setDrawerOpen] = useState(true)

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

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <Grid container spacing={0} style={{ width: "100%" }}>
      <Grid
        item
        xs={drawerOpen ? 11 : 1}
        sm={drawerOpen ? 8 : 1}
        md={5}
        id="listContainer"
      >
        <List
          drawerOpen={drawerOpen}
          center={center}
          setCenter={setCenter}
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
        <button id="drawerToggle" class="drawer-toggle" onClick={handleDrawer}>
          <img
            width="10"
            height="10"
            src={drawerOpen ? ChevronLeft : ChevronRight}
            class="chevron-icon"
            alt="chevron"
          />
        </button>
      </Grid>
      <Grid item xs={drawerOpen ? 1 : 11} sm={drawerOpen ? 4 : 11} md={7}>
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
          center={center}
          setCenter={setCenter}
        />
      </Grid>
    </Grid>
  )
}
export default MapView
