import { useState, useEffect } from "react";
import { Box, Container, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import Item from "../components/Item";

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
    <Container maxWidth={false}>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        {/* <Item key={"Country: "} value={country} />
        <Item key={"Budget: "} value={budget} />
        <Item key={"Title: "} value={title} /> */}
        <div>Country: {country}</div>
        <div>Budget: {budget}</div>
        <div>Title: {title}</div>
      </Box>
      <div>
        Destinations:
        <ul>
          {destination.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Button variant="outlined">Add Destination</Button>
    </Container>
  );
};

export default Itinerary;
