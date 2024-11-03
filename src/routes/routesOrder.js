const express = require("express");
const OrderController = require("../controller/ControllersOrder");
const router = express.Router();

//GET
router.get("/", OrderController.getAllOrder);
//POST
router.post("/", OrderController.createOrderSaya);
//PATCH
router.patch("/:id", OrderController.updateOrderSaya);
//DETAIL
router.get("/:id", OrderController.detailOrderSaya);
//DELETE
router.delete("/:id", OrderController.deleteOrderSaya);
module.exports = router;
