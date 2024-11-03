const express = require("express");
const MaterialController = require("../controller/ControllersMaterial");
const router = express.Router();

//GET
router.get("/", MaterialController.getAllMaterial);
//POST
router.post("/", MaterialController.createMaterial);
//PATCH
router.patch("/:id", MaterialController.updateMaterial);
//DETAIL
router.get("/:id", MaterialController.detailMaterial);
//DELETE
router.delete("/:id", MaterialController.deleteMaterial);
module.exports = router;
