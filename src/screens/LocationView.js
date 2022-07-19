import React, { useEffect, useState } from "react"

//react-router-dom
import { useParams } from "react-router-dom"

import { Grid, Box, Typography, Chip } from "@material-ui/core"

import SingleMap from "../components/SingleMap/SingleMap"
import ContactDetails from "../components/PlaceDetails/ContactDetails"
import OpeningHours from "../components/PlaceDetails/OpeningHours"
import { getByPlaceholderText } from "@testing-library/react"

// import { DistanceMatrixService } from "@react-google-maps/api"

const LocationView = () => {
  const { id } = useParams()

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.REACT_APP_FORESQUARE_API_KEY,
    },
  }

  const [place, setPlace] = useState({})

  const getPlace = async () => {
    const fields =
      "fsq_id%2Cname%2Ccategories%2Cdistance%2Cgeocodes%2Clocation%2Cphotos%2Cdescription%2Ctel%2Cemail%2Cwebsite%2Csocial_media%2Chours"

    const API_CALL = `https://api.foursquare.com/v3/places/${id}?fields=${fields}`

    try {
      console.log(id)
      console.log(API_CALL)
      fetch(API_CALL, options)
        .then((res) => res.json())
        .then((res) => setPlace(res))
        .catch((err) => console.error(err))
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
      location,
      geocodes,
      tel,
      website,
      social_media,
      hours,
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
              {location.formatted_address && (
                <Typography variant="h5" gutterBottom>
                  {location.formatted_address}
                </Typography>
              )}

              {/* <Typography variant="h5">
                {hours.open_now === true ? (
                  <span style={{ color: "green" }}>Open Now</span>
                ) : (
                  <span style={{ color: "red" }}>Closed Now</span>
                )}
              </Typography> */}
            </Box>
            <Grid container alignItems="center">
              <Grid item xs={12} md={8} alignItems="flex-end">
                <ContactDetails
                  tel={tel}
                  website={website}
                  social_media={social_media}
                />
              </Grid>
            </Grid>
            {/* {description_long && (
              <Box style={{ padding: 20 }}>
                <Typography variant="h5" gutterBottom>
                  Description
                </Typography>
                <Typography variant="body1">{description_long}</Typography>
              </Box>
            )} */}

            {categories && (
              <Box style={{ padding: 20 }}>
                <Typography variant="h5" gutterBottom>
                  Services
                </Typography>

                {categories
                  // ?.sort((a, b) => a.localeCompare(b))
                  .map((cat) => {
                    return (
                      <Chip
                        style={{
                          textTransform: "capitalize",
                          margin: 5,
                          marginLeft: 0,
                        }}
                        key={cat.id}
                        size="small"
                        label={cat.name}
                      />
                    )
                  })}
              </Box>
            )}
          </Box>
          {hours && (
            <Box padding={2}>
              <Typography variant="h5" gutterBottom>
                Opening Hours
              </Typography>
              <OpeningHours open_hours={hours} />
            </Box>
          )}
        </Grid>
        {geocodes && (
          <Grid item xs={12} md={6} style={{ height: "100%", width: "100%" }}>
            <SingleMap
              place={place}
              lat={geocodes.roof.latitude}
              long={geocodes.roof.longitude}
            />
          </Grid>
        )}
      </Grid>
    )
  } else {
    return <h1>No place found</h1>
  }
}
export default LocationView
