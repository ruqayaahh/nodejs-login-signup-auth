const { todoArray } = require("../models");
const { v4: uuidv4 } = require("uuid");
 
const addNewTodo = (data) => {
    const id = uuidv4();
    return todoArray.push({ ...data, id: uuidv4(), isCompleted: false});
};

const getSingleTodo = (id) => todoArray.find((el) => el.id === id);

const findTodoIndex = (id) => todoArray.findIndex((el) => el.id === id);

const updateTodo = (data, id) => {
    const todoDetails = getSingleTodo(id);
    const updatedTodo = { ...todoDetails, ...data }; 
    const index = findTodoIndex(id);
    todoDetails[index] = updatedTodo;
    return updatedTodo;
} 

const deleteTodo = (id) => {
    const index = findTodoIndex(id);
    return todoArray.splice(index, 1);
};

module.exports = {
    addNewTodo,
    getSingleTodo, 
    findTodoIndex,
    updateTodo,
    deleteTodo,
}