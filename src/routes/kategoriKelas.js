const express = require("express");
const KategoriController = require("../controller/kategoriKelas");
const router = express.Router();
//CREATE - POST
router.post("/", KategoriController.createKategoriKelas);
router.get("/", KategoriController.getKategoriKelas);
// READ - GET
router.get("/", KategoriController.getKategoriKelas);
//UPDATE - PATCH
router.patch("/:id", KategoriController.updateKategoriKelas);
router.get("/:id", KategoriController.detailKategoriKelas);
router.delete("/:id", KategoriController.deleteKategoriKelas);
module.exports = router;
