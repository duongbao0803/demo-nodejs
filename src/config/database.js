const mysql = require("mysql2/promise");
require("dotenv").config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // default 3306
  user: process.env.DB_USER, //default: empty
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: 10,
  queueLimit: 0,
});

module.exports = connection;