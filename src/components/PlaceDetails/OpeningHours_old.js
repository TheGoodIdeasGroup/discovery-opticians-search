import React from "react"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData(day, morning, afternoon) {
  return { day, morning, afternoon }
}

function openOrClosed(hours) {
  return hours ? hours : "Closed"
}

const OpeningHours = ({ open_hours }) => {
  const rows = [
    createData(
      "Monday",
      openOrClosed(open_hours.monday[0]),
      openOrClosed(open_hours.monday[1])
    ),
    createData(
      "Tuesday",
      openOrClosed(open_hours.tuesday[0]),
      openOrClosed(open_hours.tuesday[1])
    ),
    createData(
      "Wednesday",
      openOrClosed(open_hours.wednesday[0]),
      openOrClosed(open_hours.wednesday[1])
    ),
    createData(
      "Thursday",
      openOrClosed(open_hours.thursday[0]),
      openOrClosed(open_hours.thursday[1])
    ),
    createData(
      "Friday",
      openOrClosed(open_hours.friday[0]),
      openOrClosed(open_hours.friday[1])
    ),
    createData(
      "Saturday",
      openOrClosed(open_hours.saturday[0]),
      openOrClosed(open_hours.saturday[1])
    ),
    createData(
      "Sunday",
      openOrClosed(open_hours.sunday[0]),
      openOrClosed(open_hours.sunday[1])
    ),
  ]

  if (open_hours) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell align="right">Morning</TableCell>
              <TableCell align="right">Afternoon</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.day}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.day}
                </TableCell>
                <TableCell align="right">{row.morning}</TableCell>
                <TableCell align="right">{row.afternoon}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  } else {
    return <h1>No hours</h1>
  }
}
export default OpeningHours
