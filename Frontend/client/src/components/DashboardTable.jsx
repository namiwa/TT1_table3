import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import PublicIcon from "@mui/icons-material/Public";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import BuildIcon from "@mui/icons-material/Build";
import ListAltIcon from "@mui/icons-material/ListAlt";

function createData(title, country, budget, destinations) {
  return {
    title,
    country,
    budget,
    destinations,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell>{row.country}</TableCell>
        <TableCell align="center">{row.budget}</TableCell>
        <TableCell align="right">
          <Button className="actions-button" href="#">
            <OpenInNewOutlinedIcon />
          </Button>
          <Button className="actions-button">
            <DeleteOutlineIcon />
          </Button>
        </TableCell>
      </TableRow>
      <TableRow
        className="table-content"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
      >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <ul className="destinations-list">
                {row.destinations.map((destination) => {
                  return <li>{destination}</li>;
                })}
              </ul>
              {/* <button>Edit</button>
                <button>Delete</button> */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

//   Row.propTypes = {
//     row: PropTypes.shape({
//       calories: PropTypes.number.isRequired,
//       carbs: PropTypes.number.isRequired,
//       fat: PropTypes.number.isRequired,
//       history: PropTypes.arrayOf(
//         PropTypes.shape({
//           amount: PropTypes.number.isRequired,
//           customerId: PropTypes.string.isRequired,
//           date: PropTypes.string.isRequired,
//         }),
//       ).isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       protein: PropTypes.number.isRequired,
//     }).isRequired,
//   };

Row.propTypes = {
  row: PropTypes.shape({
    title: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    destinations: PropTypes.array.isRequired,
  }).isRequired,
};

const rows = [
  createData("Itinerary 1", "Country", 100, [
    "Destination 1",
    "Destination 2",
    "Destination 3",
    "Destination 4",
  ]),
  createData("Itinerary 2", "Country", 5000, [
    "Destination 1",
    "Destination 2",
    "Destination 3",
    "Destination 4",
  ]),
  createData("Itinerary 3", "Country", 800, [
    "Destination 1",
    "Destination 2",
    "Destination 3",
    "Destination 4",
  ]),
  createData("Itinerary 4", "Country", 850, [
    "Destination 1",
    "Destination 2",
    "Destination 3",
    "Destination 4",
  ]),
  createData("Itinerary 5", "Country", 1050, [
    "Destination 1",
    "Destination 2",
    "Destination 3",
    "Destination 4",
  ]),
];

const DashboardTable = () => {
  return (
    <TableContainer component={Paper} className="dashboard-table">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <ListAltIcon /> Title
            </TableCell>
            <TableCell>
              <PublicIcon /> Country
            </TableCell>
            <TableCell align="center">
              <LocalAtmIcon /> Budget ($)
            </TableCell>
            <TableCell align="right">
              <BuildIcon /> Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTable;
