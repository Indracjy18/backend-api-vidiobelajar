const express = require("express");
const ReviewController = require("../controller/ControllersReview");
const router = express.Router();

//GET
router.get("/", ReviewController.getAllReview);

//POST
router.post("/", ReviewController.createReviewKelas);

//PATCH
router.patch("/:id", ReviewController.updateReviewKelas);

//DETAIL
router.get("/:id", ReviewController.detailReviewKelas);

//DELETE
router.delete("/:id", ReviewController.deleteReviewKelas);
module.exports = router;
