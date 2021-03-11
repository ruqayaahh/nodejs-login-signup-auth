const Joi = require('joi');

const signupSchema = Joi.object({
  firstname: Joi.string().min(3).max(100).required(),
  lastname: Joi.string().min(3).max(100).required(),
  password: Joi.string().min(7).required(),
  email: Joi.string().email().required(),
  gender: Joi.string().min(3).max(100),
});

const loginSchema = Joi.object({
  password: Joi.string().min(7).required(),
  email: Joi.string().email().required(),
});

module.exports = { signupSchema, loginSchema };
