// const db = require("./db");

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllCountries = async (req, res) => {
  try {
    const result = await prisma.country.findMany();
    res.send(result);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllCountries,
};
