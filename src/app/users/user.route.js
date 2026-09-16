const {Router} = require('express');
const userRoute = Router();
const userController = require('./user.controller');
const {signIn} = require("./user.service");


userRoute.post('/signup', userController.signUp);
userRoute.post('/signin', userController.signIn);

module.exports = userRoute;