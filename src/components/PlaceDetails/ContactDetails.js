import React from "react"

import { Grid, Box, Typography, Button } from "@material-ui/core"

import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import WebIcon from "@material-ui/icons/Web"
// import PrintIcon from "@material-ui/icons/Print"

export default function ContactDetails({ contacts, website_url }) {
  return (
    <>
      {/* contacts */}
      {contacts?.map((contact, idx) => {
        const { phone_numbers, email } = contact
        return (
          <Box
            key={idx}
            display="flex"
            flexDirection="column"
            style={{
              padding: 20,
              paddingBottom: 0,
            }}
            justifyContent="space-between"
          >
            <Box justifyContent="flex-start" display="flex">
              {phone_numbers?.map((phone, idx) => (
                <Button
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                  size="small"
                  color="primary"
                  onClick={() => window.open(`tel:${phone}`, "_blank")}
                >
                  <PhoneIcon />
                  <Typography
                    style={{ marginLeft: 10 }}
                    gutterBottom
                    variant="subtitle2"
                  >
                    {phone}
                  </Typography>
                </Button>
              ))}
            </Box>
            <Box justifyContent="flex-start" display="flex">
              <Button
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
                size="small"
                color="primary"
                onClick={() => window.open(`mailto:${email}`, "_blank")}
              >
                <EmailIcon />
                <Typography
                  style={{ marginLeft: 10, marginBottom: 0 }}
                  gutterBottom
                  variant="subtitle2"
                >
                  {email}
                </Typography>
              </Button>
            </Box>
            {/* {fax && (
            <Box justifyContent="flex-start" display="flex">
              <PrintIcon />
              <Typography
                style={{ marginLeft: 10 }}
                gutterBottom
                variant="subtitle2"
              >
                {fax}
              </Typography>
            </Box>
          )} */}
          </Box>
        )
      })}
      {/* website */}

      <Grid item xs={12}>
        <Box
          style={{ paddingLeft: 20 }}
          justifyContent="flex-start"
          alignItems="flex-start"
          display="flex"
        >
          <Button
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
            size="small"
            color="primary"
            onClick={() => window.open(website_url, "_blank")}
          >
            <WebIcon />
            <Typography
              style={{ marginLeft: 10, marginBottom: 0 }}
              gutterBottom
              variant="subtitle2"
            >
              {website_url}
            </Typography>
          </Button>
        </Box>
      </Grid>
    </>
  )
}
