const express = require("express");
const ProdukController = require("../controller/produkKelas");
const router = express.Router();
//CREATE - POST
router.post("/", ProdukController.createProduk);
router.get("/", ProdukController.getAllProduk);

//UPDATE - PATCH
router.patch("/:id", ProdukController.updateProduk);
router.get("/:id", ProdukController.detailProduk);
router.delete("/:id", ProdukController.deleteProduk);
module.exports = router;
