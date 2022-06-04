const route = require('express').Router();
const topicController = require('../controller/topic.contoller');

module.exports = function () {
    route.post('/add', topicController.addTopic);
    route.get('/getTopic/:id',topicController.getTopicbyGroup)
    return route;
}
