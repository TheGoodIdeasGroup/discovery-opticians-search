import { useEffect, useState } from "react"
import "./App.css"

import axios from "axios"
import { useLoadScript } from "@react-google-maps/api"

import "@reach/combobox/styles.css"

//material ui
import { CssBaseline } from "@material-ui/core"

//components
import Header from "./components/Header/Header"

//screens
import MapView from "./screens/MapView"
import LocationView from "./screens/LocationView"

//react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [places, setPlaces] = useState([])

  //state for filters
  const [type, setType] = useState("")
  const [latLng, setLatLng] = useState("")

  //APIs
  let radius = "5000"
  // const API_CALL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=opticians%20near%20${postcode}&type=health&radius=${radius}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: ["places"],
  })

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "fsq3jw4csDhJqdPKbEm9+Fh0DeUFDLRXQApaFiA6kCNS6CE=",
    },
  }

  //first page data for testing
  const getPlacesData = async () => {
    try {
      fetch(
        `https://api.foursquare.com/v3/places/search?query=opticians&ll=${latLng}&categories=17037%2C%2015024&sort=DISTANCE&limit=10`,
        options
      )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    console.log("places are:")
    console.log(places)
  }, [places])

  useEffect(() => {
    if (latLng) {
      console.log(`postcode is ${latLng}`)
      getPlacesData()
    }
  }, [latLng])

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading Maps"

  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MapView
              places={places}
              type={type}
              setType={setType}
              // country={country}
              // setCountry={setCountry}
              latLng={latLng}
              setLatLng={setLatLng}
            />
          }
        ></Route>
        <Route path="/location/:id" element={<LocationView />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
