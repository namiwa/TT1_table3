import React, { useRef, useContext } from "react";
import { Modal, Typography, TextField, Box, Grid, Button } from "@mui/material";
import axios from "axios";
import { SnackbarContext } from "../utils/SnackbarContextUtil";

function NewDestinationModal({ openModal, setOpenModal }) {
  const { snack, setSnack } = useContext(SnackbarContext);

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
    Cost: useRef(null),
    Name: useRef(null),
    Notes: useRef(null),
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const name = inputRefs["Name"].current.value;
      const cost = inputRefs["Cost"].current.value;
      const notes = inputRefs["Notes"].current.value;

      const isInputFieldEmpty = !name || !cost || !notes;

      if (isInputFieldEmpty) {
        setSnack({
          message: "Missing fields detected!",
          open: true,
          severity: "warning",
        });
      } else {
        const destination = {
          name,
          cost,
          notes,
        };

        try {
          await axios.post("url path", destination);
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

  return (
    <div>
      <Modal open={openModal}>
        <Box sx={style}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Typography variant="h4">Create a new destination</Typography>
            </Grid>
            {renderTextField("Name")}
            {renderTextField("Cost")}
            {renderTextField("Notes", "multiline", 4)}
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

export default NewDestinationModal;
