const express = require("express");
const app = express();
const usersRoutes = require("./routes/users");
const kategoriRoutes = require("./routes/kategoriKelas");
const tutorRoutes = require("./routes/tutor");
const produkRoutes = require("./routes/produkKelas");
const modulRoutes = require("./routes/routesModul");
const materialRoutes = require("./routes/routesMaterial");
const pretestRoutes = require("./routes/routesPretest");
const orderRoutes = require("./routes/routesOrder");
const pembayaranRoutes = require("./routes/routesPembayaran");
const reviewRoutes = require("./routes/routesReview");
const kelasSayaRoutes = require("./routes/routeKelasSaya");
const middlewareLogRequest = require("./middleware/logs");
const verifyToken = require("./middleware/verifyToken"); // Import middleware verifyToken
const dotenv = require("dotenv");
const { pool } = require("./config/connection");
const apload = require("./middleware/apload");

dotenv.config();
require("dotenv").config();
const mysqlHost = process.env.MYSQL_HOST;
const mysqlUser = process.env.MYSQL_USER;
const mysqlPassword = process.env.MYSQL_PASSWORD;
const mysqlDatabase = process.env.MYSQL_DATABASE;

console.log("Database Host:", mysqlHost);

// Middleware untuk log request
app.use(middlewareLogRequest);

// Middleware untuk mengizinkan semua request JSON
app.use(express.json());

// Route untuk mengecek koneksi database
app.get("/", (req, res) => {
  pool.execute("SELECT * FROM user", (err, rows) => {
    if (err) {
      res.json({
        message: "connection error",
        error: err.message,
      });
    } else {
      res.json({
        message: "success",
        data: rows,
      });
    }
  });
});

// Routes lainnya dengan verifyToken untuk endpoint yang membutuhkan autentikasi
app.use("/api/user", verifyToken, usersRoutes); // Tambahkan verifyToken di sini
app.use("/kategori", kategoriRoutes);
app.use("/tutor", verifyToken, tutorRoutes); // Tambahkan verifyToken di sini jika rute ini butuh autentikasi
app.use("/produk", produkRoutes);
app.use("/modul", verifyToken, modulRoutes); // Contoh lainnya
app.use("/material", materialRoutes);
app.use("/pretest", pretestRoutes);
app.use("/order", verifyToken, orderRoutes);
app.use("/pembayaran", pembayaranRoutes);
app.use("/review", reviewRoutes);
app.use("/kelas", verifyToken, kelasSayaRoutes);
app.post("/apload", apload.single("photo"), (req, res) => {
  res.json({
    message: "Apload success",
  });
});

app.listen(6000, () => {
  console.log("Server is running on port 6000");
});
