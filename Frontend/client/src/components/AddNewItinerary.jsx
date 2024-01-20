import React, { useRef, useContext, useState } from "react";
import { Modal, Typography, TextField, Box, Grid, Button } from "@mui/material";
import axios from "axios";
import { SnackbarContext } from "../utils/SnackbarContextUtil";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function AddNewItinerary({ openModal, setOpenModal }) {
  const { snack, setSnack } = useContext(SnackbarContext);
  const [country, setCountry] = useState("");

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const inputRefs = {
    title: useRef(null),
    countryItineraryId: useRef(null),
    budget: useRef(null),
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const title = inputRefs["title"].current.value;
      const countryItineraryId = inputRefs["countryItineraryId"].current.value;
      const budget = inputRefs["budget"].current.value;

      const isInputFieldEmpty = !title || !countryItineraryId || !budget;

      if (isInputFieldEmpty) {
        setSnack({
          message: "Missing fields detected!",
          open: true,
          severity: "warning",
        });
      } else {
        const itinerary = {
          title: title,
          countryItineraryId: countryItineraryId,
          budget: budget,
          destination: [],
        };

        try {
          await axios.post("url path", itinerary);
          handleClose();
        } catch (error) {
          setSnack({
            message: "Error!",
            open: true,
            severity: "warning",
          });
        }
      }
    } catch (error) {
      setSnack({
        message: "Error!",
        open: true,
        severity: "warning",
      });
    }
  };

  const renderTextField = (id, multiline, maxRows) => (
    <>
      <Grid item xs={4}>
        <Typography>{id}</Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          required
          name={id}
          multiline={multiline && true}
          rows={maxRows}
          inputRef={inputRefs[id]}
        ></TextField>
      </Grid>
    </>
  );

  const renderSelectComponent = (title, id) => (
    <>
      <Grid item xs={4}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <InputLabel>Country</InputLabel>

          <Select
            value={country}
            label="Country"
            onChange={handleChangeCountry}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );

  return (
    <div>
      <Modal open={openModal}>
        <Box sx={style}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Typography variant="h4">Add a new itinerary</Typography>
            </Grid>
            {renderTextField("Itinerary Title", "itinerary")}
            {renderSelectComponent("Country", "country-id")}
            {renderTextField("Budget", "budget")}
            <Grid item container spacing={2}>
              <Grid item>
                <Button onClick={handleClose} variant="contained">
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={handleSubmit} variant="contained">
                  Create
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default AddNewItinerary;
