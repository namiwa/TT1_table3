import {
  connectIternaryToCountry,
  createCountry,
  createDestination,
  createUserItinerary,
  getUser,
  newUser,
} from "./repository/testRepository";

const countryRoutes = require("./routes/countryRoutes");
const itineraryRoutes = require("./routes/itineraryRoutes");

require("dotenv").config();
import cors from "cors";
import express from "express";

const detinationRoutes = require("./routes/destinationRoutes");

const PORT = process.env.PORT;
const app = express();

app.use("/country", countryRoutes);
app.use("/itinerary", itineraryRoutes);
app.use("/destination", detinationRoutes);

app.use(express.json());
const val = getUser();

app.listen(PORT, () => console.log(`listening to port ${PORT} `)); // This port should be in env
