const express = require("express");
const KelasSayaController = require("../controller/ControllersKelasSaya");
const router = express.Router();
//GET
router.get("/", KelasSayaController.getKelasSaya);

//POST
router.post("/", KelasSayaController.createKelasSaya);

//PATCH
router.patch("/:id", KelasSayaController.updateKelasSaya);

//DETAIL
router.get("/:id", KelasSayaController.detailKelasSaya);

//DELETE
router.delete("/:id", KelasSayaController.deleteKelasSaya);

module.exports = router;
