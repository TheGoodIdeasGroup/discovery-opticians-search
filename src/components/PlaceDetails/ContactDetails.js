import React from "react"

import { Grid, Box, Typography } from "@material-ui/core"

import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import WebIcon from "@material-ui/icons/Web"
// import PrintIcon from "@material-ui/icons/Print"

export default function ContactDetails({ tel, website, social_media }) {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent={"flex-start"}
        style={{
          padding: 20,
          paddingBottom: 0,
        }}
      >
        <Box justifyContent="flex-start" display="flex">
          <button
            className="location-info-button"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
            size="small"
            color="primary"
            onClick={() => window.open(`tel:${tel}`, "_blank")}
          >
            <PhoneIcon />
            <Typography style={{ marginLeft: 10 }} variant="subtitle2">
              {tel}
            </Typography>
          </button>
        </Box>
      </Box>
      {website && (
        <Box
          display="flex"
          flexDirection="column"
          style={{
            padding: 20,
            paddingBottom: 0,
          }}
          justifyContent="space-between"
        >
          <Box justifyContent="flex-start" display="flex">
            <button
              className="location-info-button"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
              size="small"
              color="primary"
              onClick={() => window.open(website, "_blank")}
            >
              <WebIcon />
              <Typography
                style={{ marginLeft: 10, marginBottom: 0 }}
                variant="subtitle2"
              >
                {website}
              </Typography>
            </button>
          </Box>
        </Box>
      )}
    </>
  )
}
