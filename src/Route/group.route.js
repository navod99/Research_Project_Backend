const route = require('express').Router()
const groupController = require('../controller/group.controller');

module.exports = function () {
    route.post('/add', groupController.addGroup);
    route.get('/count/:year', groupController.countGroups);
    route.get('/:id', groupController.getGroups);
    route.put('/setsupervisor/:id', groupController.setSupervisors);
    route.get('/getBySupervisor/:id', groupController.getGroupsBySupervisor)
    route.get('/', groupController.getAll);
    return route
}