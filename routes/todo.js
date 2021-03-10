const { Router } = require("express");

const { addTodo } = require("../controllers");

const { validateAddNewTodo } = require("../middlewares");

const todoRouter = Router();

todoRouter.post("/todos", validateAddNewTodo, addTodo)


module.exports = { todoRouter };
