const express = require('express');
const router = express.Router();
const staffController = require('../controller/staff.controller')

module.exports = function () {
    router.post('/add', staffController.addStaff);
    router.get('/', staffController.getStaff)
     router.get('/:id',staffController.getStaffById)
    return router;
}