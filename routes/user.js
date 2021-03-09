const express = require("express");

const { registerUser, loginUser } = require("../controllers");
const { validateLogin, validateSignup,
checkIfUserExists } = require
const userRouter = express.Router();

module.exports = router;

// or

// const { Router } = require("ex")

// const router = Router();

// Assignment, do todo like we did for user