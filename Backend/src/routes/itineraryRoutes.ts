import express from "express";
const router = express.Router();

const itineraryController = require("../controllers/itineraryController");

router.get("/itinerary", itineraryController.getItinerary);
router.get("/itinerary/all", itineraryController.getAllItineraries);
router.post("/itinerary", itineraryController.addItinerary);
router.put("/itinerary", itineraryController.editItinerary);
router.delete("/itinerary", itineraryController.deleteItinerary);

module.exports = router;
