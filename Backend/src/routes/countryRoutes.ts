import express from "express";
const router = express.Router();

const countryController = require("../controllers/countryController");

router.get("/country", countryController.getAllCountries);

module.exports = router;
