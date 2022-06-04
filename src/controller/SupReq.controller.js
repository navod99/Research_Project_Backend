const SupReq = require("../Model/SupRequest.modal")


const newReq = (req,res) => {
    const supReq = new SupReq(req.body)
    console.log(req.body)
    supReq.save()
        .then((data) => res.send(data).status(200))
    .catch ((err) => res.status(500).send(err));

}

const getRequestBySupervisor = (req, res) => {
    SupReq.find({ supervisorID: req.params.id,status:"pending" })
        .then((data) => res.send(data).status(200))
        .catch((err) => res.status(500).send(err));
}
const setStatus = (req, res) => {
    SupReq.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.send(data).status(200))
        .catch((err) => res.send(err).status(500));
}
 
module.exports = {
    newReq,
    getRequestBySupervisor,
    setStatus
}
