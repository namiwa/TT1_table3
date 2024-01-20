// const db = require("./db");

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllItineraries = async (req, res) => {
  try {
    const result = await prisma.itinerary.findMany();
    res.send(result);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
  }
};

const getItinerary = async (req, res) => {
  try {
    const id = req.params;
    console.log(req.params);
    const result = await prisma.itinerary.findUnique({
      where: {
        iternaryId: id,
      },
    });
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
