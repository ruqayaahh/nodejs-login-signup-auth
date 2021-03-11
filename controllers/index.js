const { loginUser, registerUser } = require('./user');
const {
  createTodo,
  editTodo,
  deleteAtodo,
  allTodos,
  getTodo,
} = require('./todo');

module.exports = {
  loginUser,
  registerUser,
  createTodo,
  editTodo,
  deleteAtodo,
  allTodos,
  getTodo,
};
