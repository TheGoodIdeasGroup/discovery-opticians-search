import React, { useState, useEffect, createRef } from "react"

import useStyles from "./styles"

import PlaceDetails from "../PlaceDetails/PlaceDetails"

//existing components
import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core"

//data
import countries from "../../countries"
import services from "../../services"

const List = ({
  places,
  type,
  setType,
  country,
  setCountry,
  childClicked,
  setChildClicked,
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
        .scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  //select dropdowns
  const [countryName, setCountryName] = useState()
  const [serviceName, setServiceName] = useState()

  const handleCountryChange = (e) => {
    setCountry(e.target.value)

    let theCountry = countries.filter((c) => c.key === e.target.value)
    setCountryName(theCountry[0].name)
  }

  const handleServiceChange = (e) => {
    setType(e.target.value)

    let theService = services.filter((s) => s.key === e.target.value)
    setServiceName(theService[0].name)
  }

  let markerCount = 0

  return (
    <div className={classes.container}>
      <Typography variant={"h4"}>Unilabs Locations</Typography>
      <Typography variant={"h6"}>Select your country to begin</Typography>
      {countryName && (
        <Typography gutterBottom variant="body1">
          {country &&
            places
              ?.filter(
                (place) =>
                  (!country || place.country.includes(country)) &&
                  (!type || place.categories.includes(type))
              )
              .map((place) => {
                markerCount++
              })}
          {markerCount} locations in {countryName}{" "}
          {serviceName && `offering ${serviceName}`}
        </Typography>
      )}

      <FormControl className={classes.formControl}>
        <InputLabel>Country</InputLabel>
        <Select
          value={country}
          onChange={(e) => {
            handleCountryChange(e)
          }}
        >
          <MenuItem key={"all"} value={"all"}>
            All
          </MenuItem>
          {countries &&
            countries.map((country) => (
              <MenuItem key={country.key} value={country.key}>
                {country.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {country && (
        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => {
              handleServiceChange(e)
            }}
          >
            <MenuItem key={"all"} value={""}>
              All
            </MenuItem>
            {services &&
              services.map((service, idx) => (
                <MenuItem key={idx} value={service.key}>
                  {service.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      )}

      <Grid container spacing={3} className={classes.list}>
        {country &&
          places
            ?.filter(
              (place) =>
                //  place.country.includes(country)
                (!country || place.country.includes(country)) &&
                (!type || place.categories.includes(type))
            )
            .map((place, idx) => (
              <Grid item key={idx} md={12}>
                <PlaceDetails place={place} id={place.id} />
              </Grid>
            ))}
      </Grid>
    </div>
  )
}
export default List
