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

const getItinerary = async (req, res) => {};

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
