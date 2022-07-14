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
import WebIcon from "@mui/icons-material/Web"

import CardImage from "./CardImage"

import useStyles from "./styles"

//react-router-dom
import { Link } from "react-router-dom"

const PlaceDetails = ({ place, refProp, selected }) => {
  const classes = useStyles()

  const {
    // photos: { primary, secondary },
    name,
    categories,
    location: { postcode, address },
    zipcode,
    fsq_id,
    tel,
    website,
    photos,
  } = place

  return (
    <Card elevation={6} id={fsq_id}>
      <CardContent style={{ padding: 0, marginBottom: 20 }}>
        {/* {photos[0] && (
          <CardImage
            primary={`${photos[0].prefix}original${photos[0].suffix}`}
            // secondary={secondary}
            name={name}
          />
        )} */}

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
          {/* {post_town && ( */}
          {/* <Box display="flex" justifyContent="space-between"> */}
          {/* <Typography variant="subtitle1">City</Typography> */}
          {/* <Typography gutterBottom variant="subtitle1">
                {post_town}
              </Typography> */}
          {/* </Box> */}
          {/* )} */}
          {address && (
            <Box
              style={{
                marginBottom: 10,
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <LocationOnIcon />
              <Typography
                variant="subtitle2"
                style={{ marginLeft: 10, display: "inline-flex" }}
              >
                {postcode}, {address} {zipcode}
              </Typography>
            </Box>
          )}
          {tel && (
            <Box
              style={{
                marginBottom: 10,
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <PhoneIcon />
              <Typography
                style={{ marginLeft: 10, display: "inline-flex" }}
                variant="subtitle2"
              >
                {tel}
              </Typography>
            </Box>
          )}
          {website && (
            <Box
              style={{
                marginBottom: 10,
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <WebIcon />
              <Typography
                style={{ marginLeft: 10, display: "inline-flex" }}
                variant="subtitle2"
              >
                {website}
              </Typography>
            </Box>
          )}
          {/* <Box display="flex">
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
          </Box> */}
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
              pathname: `/location/${fsq_id}`,
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
