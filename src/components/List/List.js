import React, { useState, useEffect, createRef } from "react"

import useStyles from "./styles"

import PlaceDetails from "../PlaceDetails/PlaceDetails"

//existing components
import { Grid, Typography } from "@material-ui/core"

//**move later
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox"

import "@reach/combobox/styles.css"

const List = ({
  places,
  type,
  setType,
  country,
  childClicked,
  latLng,
  setLatLng,
  center,
  setCenter,
  drawerOpen,
}) => {
  const classes = useStyles()

  const [elRefs, setElRefs] = useState([])

  useEffect(() => {
    console.log(childClicked)
    if (childClicked) {
      scrollToCard(childClicked.id)
    }
  }, [childClicked])

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    )
  }, [places])

  const scrollToCard = (id) => {
    if (id) {
      document
        .getElementById(id)
        .scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  let markerCount = 0

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete({
    requestOptions: {
      region: "uk",
      types: ["(regions)"],
      componentRestrictions: { country: "uk" },
    },
  })

  return (
    <div className={classes.container} style={{ opacity: drawerOpen ? 1 : 0 }}>
      <Typography variant={"h1"}>
        Find Optometrists and Eye Care stores in your area
      </Typography>
      {/* <Typography variant={"h6"} gutterBottom>
        Search by postcode, town, or address
      </Typography> */}
      <Combobox
        style={{ marginBottom: 20 }}
        onSelect={async (address) => {
          try {
            const geocodes = await getGeocode({ address })
            const { lat, lng } = getLatLng(geocodes[0])
            console.log(address)
            console.log({ lat, lng })
            setLatLng(`${lat},${lng}`)
            setCenter({ lat: lat, lng: lng })
          } catch (err) {
            console.log(err)
          }
        }}
        aria-labelledby="demo"
      >
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          className="search-input"
          placeholder={"Search by postcode, town, or address"}
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, idx) => (
          <Grid item key={idx} md={12} sm={12} xs={12}>
            <PlaceDetails place={place} id={place.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
export default List
