// const db = require("./db");

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllItineraries = async (req, res) => {
  try {
    console.log(req);
    const result = await prisma.itinerary.findMany();
    res.send(result);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
  }
};

const getItinerary = async (req, res) => {
  // try {
  //   const id = req.params.id;
  //   console.log(id);
  //   const result = await prisma.itinerary.findUnique({
  //     where: {
  //       itineraryId: parseInt(id),
  //     },
  //   });
  //   res.send(result);
  //   res.status(200).json({ success: true, data: result });
  // } catch (error) {
  //   console.error(error);
  // }
};

const addItinerary = async (req, res) => {
  try {
    const result = await prisma.itinerary.create({
      data: {
        budget: req.body.budget,
        title: req.body.title,
      },
    });
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

const editItinerary = () => {};

const deleteItinerary = () => {};

module.exports = {
  getAllItineraries,
  getItinerary,
  addItinerary,
  editItinerary,
  deleteItinerary,
};
