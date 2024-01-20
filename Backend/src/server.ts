import {connectIternaryToCountry, createCountry, createDestination, createUserItinerary, getUser, newUser} from "./repository/testRepository";

require('dotenv').config();
import cors from "cors";
import express from "express";

const PORT = process.env.PORT;
const app = express();

const val = getUser()

app.listen(PORT, () => console.log(`listening to port ${PORT} `)); // This port should be in env




