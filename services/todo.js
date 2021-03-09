const { todoArray } = require("./models");

const addNewTodo = (data) => todoArray.push(data);

const updateTodoProfile = (data, id) => {
    const todoDetails = todoArray.find((el) => el.id === id);
    const updatedTodo = { ...todoDetails, ...data }; 
    const index = todoArray.findIndex((el) => el.id === id);
    todoDetails[index] = Todo = updatedTodo;
    return updatedTodo;
} 

const getSingleTodo = (id) => todoArray.find((el) => el.id === id);

const deleteTodo = (id) => {
    const index = todoArray.findIndex((el) => el.id === id);
    return todoArray.splice(index, 1);
}