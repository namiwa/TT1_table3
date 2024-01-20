import { useState, useEffect } from "react";
import { Box, Container, Button } from "@mui/material";
import DestinationTable from "../components/DestinationTable";
import DestinationModal from "../components/DestinationModal";
import PublicIcon from "@mui/icons-material/Public";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Itinerary.css';

const Itinerary = () => {
    const [openModal, setOpenModal] = useState(false);
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
    <>
      <Container maxWidth={false} className="itinerary-page container">
        <Box>
          {/* <Item key={"Country: "} value={country} />
        <Item key={"Budget: "} value={budget} />
        <Item key={"Title: "} value={title} /> */}
          <h1>{title}</h1>
          <p className="itinerary-details">
            <PublicIcon /> Country: {country}
          </p>
          <p className="itinerary-details">
            <LocalAtmIcon /> Budget: ${budget}
          </p>
        </Box>
        <br />
        <div>
          <div className="destinations-header">
            <p className="itinerary-details">
              <LocationOnIcon /> Destinations:
            </p>
            <button
              className="add-button"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              ADD DESTINATION
            </button>
          </div>
          <DestinationTable />
        </div>
      </Container>
      {openModal && (
        <DestinationModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default Itinerary;