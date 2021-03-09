const Joi = require("joi");
const { getSingleUserByEmail } = require("../services")
const { signupSchema, loginSchema } = require("../validation");

const validateSignup = (req, res, next) => {
    try {
        const { error } = signupSchema.validate(req.body);
        if(!error) {
            return next();   
        }
        return res.status(400).json({
            status: "fail",
            message: error.message
        });
    }
    catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
}

const validateLogin = (req, res, next) => {
    try {
        const { error } = loginSchema.validate(req.body);
        if(!error) {
            return next();   
        }
    }
    catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "Something went wrong."
        });
    }
}

const checkIfUserExists = (req, res, next) => {
    try {
        const user = getSingleUserByEmail(req.body.email);
        if(!user) {
            return next();
        }
        return res.status(400).json({
            status: "fail",
            message: "user already exists."
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "Something went wrong."
        });
    }
}

module.exports = {
    checkIfUserExists,
    validateLogin,
    validateSignup
}