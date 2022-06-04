const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controll')

module.exports = function () {
    router.post('/add', userController.addUser);
    router.get('/', userController.getUser)
    router.get('/:id', userController.getUserById);
    router.put('/groupAdd/:id', userController.setGroupId);
    return router;
}