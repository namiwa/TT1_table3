var mariadb = require("mariadb");

// Create a connection pool
var pool = mariadb.createPool({
  host: "127.0.0.1",
  port: 3307,
  user: "root",
  password: "password",
  database: "techtrack24",
});

// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool,
});
