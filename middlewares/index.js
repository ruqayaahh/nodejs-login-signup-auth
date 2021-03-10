 const {
    checkIfUserExists,
    validateLogin,
    validateSignup,
 } = require("./user");

 const { validateAddNewTodo } = require("./todo");

 module.exports = {
   checkIfUserExists,
   validateLogin,
   validateSignup,
   validateAddNewTodo,
 }