const Group = require('../Model/Group.model');

const addGroup = (req, res) => {
    const group = new Group(req.body);
    group.save()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err));
    console.log(req.body)
}
const getAll = async (req, res) => {
    Group.find()
        .then((data) => { res.status(200).send(data) })
        .catch((err) => res.status(500).send(err));
}
const countGroups = async (req, res) => {
    const year = req.params.year;
  await  Group.countDocuments({year:year})
      .then((data) => res.status(200).send({ count: data }))
        .catch((err) => res.send(err).status(500));
}
const getGroups = async (req, res) => {
    await Group.findOne({groupId:req.params.id})
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err));
    
}
const setSupervisors = async (req, res) => {
    Group.findOneAndUpdate({ GroupId: req.params.id }, req.body)
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err));
}
const getGroupsBySupervisor = async (req, res) => {
    Group.find({ supervisorId: req.params.id })
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err));
}

module.exports = {
    addGroup,
    countGroups,
    getGroups,
    setSupervisors,
    getGroupsBySupervisor,
    getAll
}