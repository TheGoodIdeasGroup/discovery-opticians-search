import React, { useState, useEffect } from "react"

import useStyles from "./styles"

// import { Autocomplete } from "@react-google-maps/api"
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core"
import { useLocation } from "react-router-dom"

const Header = () => {
  const classes = useStyles({})

  const location = useLocation()

  const path = location.pathname
  const [display, setDisplay] = useState(false)

  // const goToPreviousPath = (e) => {
  //   e.preventDefault()
  //   window.history.back()
  // }

  useEffect(() => {
    setDisplay(path !== "/" ? true : false)
  }, [])

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Opticians Search
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Find Optometrists and Eye Care stores in your area
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
