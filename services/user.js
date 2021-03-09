const { userArray } = require("../models");
const { v4: uuid } = require("uuid");


const addNewUser = (data) => {
    userArray.push({ ...data, id: uuid()}) 
}

const updateUserProfile = (data, id) => {
    const userDetails = userArray.find((el) => el.id === id);
    const updatedProfile = { ...userDetails, ...data }; 
    const index = userArray.findIndex((el) => el.id === id);
    userDetails[index] = user = updatedProfile;
    return updatedProfile;
} 

const getSingleUserById = (id) => userArray.find((el) => el.email === email);

const getSingleUserByEmail = (email) => userArray.find((el) => el.id === id);

const deleteUser = (id) => {
    const index = userArray.findIndex((el) => el.id === id);
    return userArray.splice(index, 1);
}

module.exports = {
    addNewUser,
    updateUserProfile,
    getSingleUserByEmail,
    getSingleUserById,
    deleteUser,
}