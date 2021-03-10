const { addNewTodo } = require("../services");

const addTodo = (req, res) => {
  try {
    addNewTodo(req.body);
    res.status(201).json({
      status: "success",
      message: "Todo created successful.",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong.",
    });
  }
}; 

module.exports = { addTodo };