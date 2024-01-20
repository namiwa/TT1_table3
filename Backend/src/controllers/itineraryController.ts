// const db = require("./db");

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllItineraries = async (req, res) => {
  try {
    const userId = req.params.userId;
    const result = await prisma.itinerary.findMany({
      where: {
        userItineraryId: parseInt(userId),
      },
    });
    res.send(result);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
  }
};

const getItinerary = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const result = await prisma.itinerary.findUnique({
      where: {
        itineraryId: parseInt(id),
      },
      include: {
        country: true,
      },
    });
    res.send(result);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
  }
};

const addItinerary = async (req, res) => {
  try {
    const userId = req.body.userId;
    const countryId = req.body.countryId;
    const result = await prisma.itinerary.create({
      data: {
        budget: req.body.budget,
        title: req.body.title,
        user: {
          connect: {
            userId: userId,
          },
        },
        country: {
          connect: {
            countryId: countryId,
          },
        },
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
