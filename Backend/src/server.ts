import {connectIternaryToCountry, createCountry, createDestination, createUserItinerary, getUser, newUser} from "./repository/testRepository";

require('dotenv').config();
import express from "express";

const PORT = process.env.PORT;
const app = express();
require('dotenv').config();
import cors from "cors";
import corsOptions from "./config/cors/corsOption";
import authRoutes from "./routes/authRoutes";
import passport from "passport";

require('./config/passport strategy/passportJWT')(passport)
app.use(passport.initialize()); // Create the passport strategy object

app.use(express.json());
app.use(cors(corsOptions))

app.use("/auth", authRoutes )




const val = getUser()

app.listen(PORT, () => console.log(`listening to port ${PORT} `)); // This port should be in env




