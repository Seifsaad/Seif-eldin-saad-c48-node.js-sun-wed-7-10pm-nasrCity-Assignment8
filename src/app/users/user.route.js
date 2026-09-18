const {Router} = require('express');
const userRoute = Router();
const userController = require('./user.controller');
const {signIn, getUserData} = require("./user.service");


userRoute.post('/signup', userController.signUp);
userRoute.post('/signin', userController.signIn);
userRoute.patch('/:id', userController.updateUser);
userRoute.delete('/:id', userController.deleteUser);
userRoute.get('/:id', userController.getUserData);

module.exports = userRoute;