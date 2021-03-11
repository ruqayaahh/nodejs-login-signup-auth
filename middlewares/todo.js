const { todoTitleSchema } = require('../validation');
const { getSingleTodo, getSingleUserByEmail } = require('../services');

const verifyOwner = (req, res, next) => {
  try {
    const owner = getSingleUserByEmail(req.user.email);
    const currentTodo = getSingleTodo(req.params.todoId);
    if (owner.email !== currentTodo.email) {
      return res.status(401).json({
        status: 'Fail',
        message: 'You are not authorized to do this.',
      });
    }
    return next();
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong.',
    });
  }
};

const validateAddNewTodo = (req, res, next) => {
  try {
    const { error } = todoTitleSchema.validate(req.body);
    if (!error) {
      return next();
    }
    return res.status(400).json({
      status: 'Fail',
      message: error.message,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong.',
    });
  }
};

const checkIfTodoExists = (req, res, next) => {
  try {
    const currentTodo = getSingleTodo(req.params.todoId);
    if (currentTodo) {
      return next();
    }
    return res.status(404).json({
      status: 'Fail',
      message: 'Todo does not exist.',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong.',
    });
  }
};

module.exports = {
  verifyOwner,
  validateAddNewTodo,
  checkIfTodoExists,
};
