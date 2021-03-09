 const Joi = require("joi");

 const addNewTodoScema = Joi.object({
     title: Joi.string().min(1).max(100).required,
 })

 module.exports = todoTitleSchema;