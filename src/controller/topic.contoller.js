
const Topic = require('../Model/Topic.model');


const addTopic = (req, res) => {
    const topic = new Topic(req.body);
    topic.save()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(200).send(err));
}
const getTopicbyGroup = async (req, res) => {
    Topic.findOne({ groupId: req.params.id })
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err));
}
module.exports = {
    addTopic,
    getTopicbyGroup
}