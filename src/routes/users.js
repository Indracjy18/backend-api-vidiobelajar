const express = require("express");
const UserController = require("../controller/users");
const router = express.Router();

// CREATE - POST
router.post("/", UserController.createNewUsers); // Register new user
router.post("/login", UserController.login); // Login user
router.get("/verify-email", UserController.verifyEmail); // Email verification

// READ - GET
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getDetailUsers);

// UPDATE - PATCH
router.patch("/:id", UserController.updateUsers);

// DELETE - DELETE
router.delete("/:id", UserController.deleteUsers);

module.exports = router;
