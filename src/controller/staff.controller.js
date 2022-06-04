const Staff = require('../Model/staff.model');

const addStaff = async (req, res) => {
    const user = new Staff(req.body);
    await user
        .save()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.send(err));
    
};
const getStaff = async (req, res) => {
    Staff.find()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.send(err))
    
}
const getStaffById = async (req, res) => {
    console.log(req.params.id)
    Staff.findOne({regNo:req.params.id})
        .then((data) => { res.status(200).send(data); console.log(data)})
        .catch((err) => res.send(err))
    
}
module.exports = {
    addStaff,
    getStaff,
    getStaffById
}