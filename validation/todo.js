const Joi = require('joi');

const todoTitleSchema = Joi.object({
  todotitle: Joi.string().min(3).max(100).required(),
});

module.exports = { todoTitleSchema };
