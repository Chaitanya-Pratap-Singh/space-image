const express = require("express");
const userContorller = require("../controllers/user");
const router = express.Router();

router.get("/getAllUsers", userContorller.getAllUsers);

router.post("/login", userContorller.login);

router.post("/register", userContorller.register);

module.exports = router;
