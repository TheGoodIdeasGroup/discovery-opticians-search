import { useEffect } from "react"

import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Chip,
  Button,
} from "@material-ui/core"

import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"

import CardImage from "./CardImage"

import useStyles from "./styles"

//react-router-dom
import { Link } from "react-router-dom"

const PlaceDetails = ({ place, refProp, selected }) => {
  const classes = useStyles()

  const {
    photos: { primary, secondary },
    name,
    categories,
    city,
    address_details,
    zipcode,
    id,
    contacts: { phone_numbers },
  } = place

  return (
    <Card elevation={6} id={id}>
      <CardContent style={{ padding: 0, marginBottom: 20 }}>
        <CardImage primary={primary} secondary={secondary} name={name} />
        <div
          style={{
            marginTop: 20,
            marginBottom: 0,
            marginLeft: 20,
            marginRight: 20,
          }}
          className="card-content"
        >
          <Typography gutterBottom variant={"h5"}>
            {name}
          </Typography>
          {city && (
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">City</Typography>
              <Typography gutterBottom variant="subtitle1">
                {city}
              </Typography>
            </Box>
          )}
          {address_details && (
            <Box
              display="flex"
              style={{ marginBottom: 10 }}
              justifyContent="flex-start"
            >
              <LocationOnIcon />
              <Typography
                gutterBottom
                variant="subtitle2"
                style={{ marginLeft: 10 }}
              >
                {address_details.number}, {address_details.street_name}{" "}
                {zipcode}
              </Typography>
            </Box>
          )}
          {phone_numbers && (
            <Box
              display="flex"
              style={{ marginBottom: 10 }}
              justifyContent="flex-start"
            >
              <PhoneIcon />
              <Typography
                style={{ marginLeft: 10 }}
                gutterBottom
                variant="subtitle2"
              >
                {phone_numbers &&
                  phone_numbers.map((num) => <span>{num}</span>)}
              </Typography>
            </Box>
          )}
          <Box display="flex">
            <Typography variant="h6">Services</Typography>
          </Box>
          <Box display="flex" style={{ flexWrap: "wrap" }}>
            {categories
              ?.sort((a, b) => a.localeCompare(b))
              .map((service, idx) => {
                let theService = service.replace("gcid:", "")
                let theServiceTitle = theService.replaceAll("_", " ")
                return (
                  <Chip
                    style={{ textTransform: "capitalize" }}
                    key={`${theService}-${idx}`}
                    size="small"
                    label={theServiceTitle}
                    className={classes.chip}
                  />
                )
              })}
          </Box>
        </div>
        <CardActions>
          <Button
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
            size="small"
            color="primary"
            component={Link}
            to={{
              pathname: `/location/${id}`,
            }}
          >
            View Location
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}
export default PlaceDetails
