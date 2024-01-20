import express from "express";
const router = express.Router();

const itineraryController = require("../controllers/itineraryController");

router.get("/:id", itineraryController.getItinerary);
router.get("/all", itineraryController.getAllItineraries);
router.post("/", itineraryController.addItinerary);
router.put("/", itineraryController.editItinerary);
router.delete("/", itineraryController.deleteItinerary);

module.exports = router;
