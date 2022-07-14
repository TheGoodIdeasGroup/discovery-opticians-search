import React, { useEffect, useState } from "react"

import axios from "axios"

//react-router-dom
import { useParams } from "react-router-dom"

import { Grid, Box, Typography, Chip } from "@material-ui/core"

import SingleMap from "../components/SingleMap/SingleMap"
import ContactDetails from "../components/PlaceDetails/ContactDetails"
import OpeningHours from "../components/PlaceDetails/OpeningHours"

// import { DistanceMatrixService } from "@react-google-maps/api"

const LocationView = () => {
  const { id } = useParams()

  const API_CALL = `https://corsanywhere.herokuapp.com/${process.env.REACT_APP_PARTOO_URL}/${id}?api_key=${process.env.REACT_APP_PARTOO_API}`

  const [place, setPlace] = useState({})

  const getPlace = async () => {
    try {
      await axios.get(API_CALL).then((res) => setPlace(res.data))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPlace()
  }, [])

  if (place) {
    const {
      contacts,
      description_long,
      categories,
      name,
      zipcode,
      city,
      address,
      open_hours,
      lat,
      long,
    } = place

    return (
      <Grid
        container
        spacing={3}
        alignItems="flex-start"
        style={{ height: "calc(100vh - 64px)", width: "100%" }}
      >
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              gutterBottom
              variant="h4"
              style={{ paddingLeft: 20, paddingRight: 20, marginTop: 20 }}
            >
              {name}
            </Typography>

            <Box
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5" gutterBottom>
                {address}, {city}, {zipcode}
              </Typography>
              <Typography variant="h5">
                {place.status === "open" ? (
                  <span style={{ color: "green" }}>Open</span>
                ) : (
                  <span style={{ color: "red" }}>Closed</span>
                )}
              </Typography>
            </Box>
            <Grid container alignItems="center">
              <Grid item xs={12} md={8} alignItems="flex-end">
                <ContactDetails
                  contacts={contacts}
                  website_url={place.website_url}
                />
              </Grid>
            </Grid>
            {description_long && (
              <Box style={{ padding: 20 }}>
                <Typography variant="h5" gutterBottom>
                  Description
                </Typography>
                <Typography variant="body1">{description_long}</Typography>
              </Box>
            )}

            {categories && (
              <Box style={{ padding: 20 }}>
                <Typography variant="h5" gutterBottom>
                  Services
                </Typography>

                {categories
                  ?.sort((a, b) => a.localeCompare(b))
                  .map((service) => {
                    let theService = service.replace("gcid:", "")
                    let theServiceTitle = theService.replaceAll("_", " ")
                    return (
                      <Chip
                        style={{
                          textTransform: "capitalize",
                          margin: 5,
                          marginLeft: 0,
                        }}
                        key={theService}
                        size="small"
                        label={theServiceTitle}
                      />
                    )
                  })}
              </Box>
            )}
          </Box>
          {open_hours && (
            <Box padding={2}>
              <Typography variant="h5" gutterBottom>
                Opening Hours
              </Typography>
              <OpeningHours open_hours={open_hours} />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={6} style={{ height: "100%", width: "100%" }}>
          <SingleMap place={place} lat={lat} long={long} />
        </Grid>
      </Grid>
    )
  } else {
    return <h1>No place found</h1>
  }
}
export default LocationView
