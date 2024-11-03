const express = require("express");

const TutorController = require("../controller/tutor");
const router = express.Router();
//CREATE - POST
router.post("/", TutorController.createTutor);
router.get("/", TutorController.getAllTutor);
// READ - GET
router.get("/", TutorController.getAllTutor);
//UPDATE - PATCH
router.patch("/:id", TutorController.updateTutor);
router.get("/:id", TutorController.detailTutor);
router.delete("/:id", TutorController.deleteTutor);
module.exports = router;
