const express = require("express");
const pembayaranController = require("../controller/ControllersPembayaran");
const router = express.Router();

//GET
router.get("/", pembayaranController.getAllPembayaran);

//POST
router.post("/", pembayaranController.createPembayaranKelas);

//GET
router.get("/:id", pembayaranController.detailPembayaranKelas);

//PATCH
router.patch("/:id", pembayaranController.updatePembayaranKelas);

//DELETE
router.delete("/:id", pembayaranController.deletePembayaranKelas);

module.exports = router;
