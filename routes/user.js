const { Router } = require("express");

const { registerUser, loginUser } = require("../controllers");

const {
    validateLogin,
    validateSignup,
    checkIfUserExists,
 } = require("../middlewares");

const userRouter = Router();

userRouter.post("/register", validateSignup, checkIfUserExists, registerUser);
userRouter.post("/login", validateLogin, loginUser);

module.exports = userRouter;

// or
// const { Router } = require("ex")
// const userRouter = Router();

// Assignment, do todo like we did for user