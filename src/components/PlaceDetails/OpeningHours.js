import React from "react"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

const OpeningHours = ({ open_hours }) => {
  const handleOpeningHours = (hours) => {
    const splitHours = hours
      .split("; ")
      .flatMap((line, i) => [line, <br key={`line-${i}`} />])
    return splitHours
  }

  if (open_hours) {
    if (open_hours.display) {
      return <h4>{handleOpeningHours(open_hours.display)}</h4>
    } else if (!open_hours.regular && open_hours.display)
      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Day</TableCell>
                <TableCell align="right">Open</TableCell>
                <TableCell align="right">Close</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {open_hours.regular?.map((row, i) => (
                <TableRow
                  key={row.day}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.day}
                  </TableCell>
                  <TableCell align="right">{row.open}</TableCell>
                  <TableCell align="right">{row.close}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
  } else {
    return (
      <h1>Contact the optometrist directly to find out their opening hours.</h1>
    )
  }
}
export default OpeningHours
