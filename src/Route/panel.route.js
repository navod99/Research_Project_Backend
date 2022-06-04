const route = require('express').Router();

const panelController = require('../controller/panel.controller');
const router = require('./submission.router');

module.exports = function () {
    route.post('/add', panelController.addPanel);
    route.get('/count', panelController.countPanel);
    route.get('/', panelController.getPanels);
    return route
}