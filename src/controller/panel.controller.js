const Panel = require('../Model/panel.model');

const addPanel = (req,res) => {
    const panel = new Panel(req.body)

    panel.save()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(200).send(err));
}

const countPanel = (req, res) => {
    Panel.countDocuments()
        .then((data) => res.status(200).send({ count: data }))
        .catch((err) => res.status(500).send(err));
}

const getPanels = (req, res) => {
    Panel.find()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(err));
}

module.exports = {
    addPanel,
    countPanel,
    getPanels
}