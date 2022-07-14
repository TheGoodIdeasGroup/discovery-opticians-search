import React from "react"

import { CardMedia } from "@material-ui/core"
import Carousel from "react-material-ui-carousel"

export default function CardImage({ primary, secondary, name }) {
  let usePhoto
  let photoArray
  let isArray = false
  if (primary != null) {
    usePhoto = primary
  } else if (secondary) {
    photoArray = secondary
    isArray = true
  }

  if (isArray) {
    return (
      <Carousel autoplay={false}>
        {photoArray.map((item, idx) => (
          <CardMedia
            key={idx}
            className="card-image"
            component="img"
            height="300"
            image={item}
            alt={`name ${idx}`}
            style={{ objectFit: "contain" }}
          ></CardMedia>
        ))}
      </Carousel>
    )
  } else {
    return (
      <CardMedia
        className="card-image"
        component="img"
        height="300"
        image={usePhoto}
        alt={name}
        style={{ objectFit: "contain" }}
      ></CardMedia>
    )
  }
}
