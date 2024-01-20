import { useState, useEffect } from "react";
import { Box, Container, Button } from "@mui/material";
import DestinationTable from "../components/DestinationTable";
import PublicIcon from "@mui/icons-material/Public";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import './Itinerary.css';

const Itinerary = () => {
    const [country, setCountry] = useState("SG");
    const [budget, setBudget] = useState("100");
    const [title, setTitle] = useState("Test");
    const [destination, setDestination] = useState(["Singapore", "Malaysia", "Indonesia"]);

//   const handleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

  const handleLogin = () => {
    console.log("Submit");
  };

  useEffect(() => {
    // handle backend query
  }, []);

  return (
    <Container maxWidth={false} className="container">
      <Box>
        {/* <Item key={"Country: "} value={country} />
        <Item key={"Budget: "} value={budget} />
        <Item key={"Title: "} value={title} /> */}
        <h1>{title}</h1>
        <p className="itinerary-details"><PublicIcon /> Country: {country}</p>
        <p className="itinerary-details"><LocalAtmIcon /> Budget: {budget}</p>
      </Box>
      <div>
        Destinations:
        <DestinationTable />
      </div>
      <Button variant="outlined">Add Destination</Button>
    </Container>
  );
};

export default Itinerary;