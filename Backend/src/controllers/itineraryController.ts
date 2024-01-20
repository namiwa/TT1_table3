const db = require("./db");

const getAllItineraries = async (req, res) => {
  try {
    const result = await db.pool.query("select * from itinerary");
    res.send(result);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
  }
};

const getItinerary = async (req, res) => {
  const itinerary = req.body;
  try {
    const result = await db.pool.query("select * from itinerary where id = ?", [
      itinerary.id,
    ]);
    res.send(result);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
  }
};

const addItinerary = () => {};

const editItinerary = () => {};

const deleteItinerary = () => {};

module.exports = {
  getAllItineraries,
  getItinerary,
  addItinerary,
  editItinerary,
  deleteItinerary,
};
