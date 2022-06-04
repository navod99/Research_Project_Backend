const express = require('express')
const router = express.Router();
const login = require('../controller/login.controller');

module.exports = function () {
    router.post('/add', login.addLogin);
    router.post('/login',login.login)
    return router;
}