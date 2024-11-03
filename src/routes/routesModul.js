const express = require("express");
const ModulController = require("../controller/ControllersModul");
const router = express.Router();

//GET
router.get("/", ModulController.getAllModul);
router.post("/", ModulController.createModulKelas);

//UPDATE - PATCH
router.patch("/:id", ModulController.updateModulKelas);
router.get("/:id", ModulController.detailModulkelas);
router.delete("/:id", ModulController.deleteModulKelas);
module.exports = router;
