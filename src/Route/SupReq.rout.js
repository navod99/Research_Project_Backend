const route = require('express').Router();
const supReqController = require('../controller/SupReq.controller');


module.exports = function () {
    route.post('/add', supReqController.newReq);
    route.get('/findsup/:id', supReqController.getRequestBySupervisor);
    route.put('/status/:id',supReqController.setStatus)
    return route;
}