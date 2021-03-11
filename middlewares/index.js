const {
  checkIfUserExists,
  validateLogin,
  validateSignup,
} = require('./user');

const { validateAddNewTodo, checkIfTodoExists, verifyOwner } = require('./todo');

const { authenticate } = require('./auth');

module.exports = {
  checkIfUserExists,
  validateLogin,
  validateSignup,
  validateAddNewTodo,
  checkIfTodoExists,
  authenticate,
  verifyOwner,
};
