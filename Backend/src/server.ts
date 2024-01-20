require('dotenv').config();
import cors from "cors";
import express from "express";

const PORT = process.env.PORT;
const app = express();


app.listen(PORT, () => console.log(`listening to port ${PORT} `)); // This port should be in env




