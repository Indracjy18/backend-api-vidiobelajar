const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config(); // Mengambil konfigurasi dari .env

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "vidio_belajar",
});

module.exports = {
  pool,
};
