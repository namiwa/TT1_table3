const db = require("./db");

const getAllCountries = async (req, res) => {
  try {
    const result = await db.pool.query("select * from country");
    res.send(result);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllCountries,
};
