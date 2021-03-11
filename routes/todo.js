const { Router } = require('express');

const {
  createTodo,
  editTodo,
  deleteAtodo,
  allTodos,
  getTodo,
} = require('../controllers');

const {
  validateAddNewTodo,
  checkIfTodoExists,
  authenticate,
  verifyOwner,
} = require('../middlewares');

const todoRouter = Router();

todoRouter.use(authenticate);
todoRouter.use(verifyOwner);

todoRouter.post('/todos', validateAddNewTodo, createTodo);

todoRouter.use('/todos/:todoId', checkIfTodoExists);

todoRouter.put('/todos/:todoId', validateAddNewTodo, editTodo);

todoRouter.get('/todos/:todoId', getTodo);

todoRouter.delete('/todos/:todoId', deleteAtodo);

todoRouter.get('/todos', allTodos);

module.exports = { todoRouter };
