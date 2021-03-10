const Joi = require("joi");
const { todoTitleSchema } = require("../validation");

const validateAddNewTodo = (req, res, next) => {
    try {
       const { error } = todoTitleSchema.validate(req.body);
       if(!error) {
          return next();
       } 
       res.status(400).json({
        status: "Fail",
        message: error.message,
    });
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: "Something went wrong."
        });
    }
};

module.exports = { validateAddNewTodo };