import exp from "constants";

const countryRoutes = require("./routes/countryRoutes");
const itineraryRoutes = require("./routes/itineraryRoutes");
const destinationRoutes = require("./routes/destinationRoutes");
const PORT = process.env.PORT;

require("dotenv").config();
import cors from "cors";
import express from "express";
import corsOptions from "./config/cors/corsOption";
import authRoutes from "./routes/authRoutes";
import passport from "passport";

require('./config/passport strategy/passportJWT')(passport)
const app = express();
app.use(passport.initialize()); // Create the passport strategy object

app.use(express.json());
app.use(cors(corsOptions))

app.use("/auth", authRoutes )
app.use("/country", countryRoutes);
app.use("/itinerary", itineraryRoutes);
app.use("/destination", destinationRoutes);






app.listen(PORT, () => console.log(`listening to port ${PORT} `)); // This port should be in env




