const express = require("express");
const PretestController = require("../controller/ControllersPretest");
const router = express.Router();
//GET
router.get("/", PretestController.getAllPretest);

//POST
router.post("/", PretestController.createPretestKelas);
router.patch("/:id", PretestController.updatePretestKelas);
//DETAIL
router.get("/:id", PretestController.detailPretestKelas);

//DELETE
router.delete("/:id", PretestController.deletePretestKelas);
module.exports = router;
