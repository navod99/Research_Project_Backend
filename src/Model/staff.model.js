const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema(
{
    regNo: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        spec: { type: String, required: true },
        userrole: { type: String, required: true },
        createdBy:{type: String, required: true},
        createdOn: { type: String, required: true },
        EditedBy:{type: String, required: false},
        EditedOn: { type: String, required: false },
        
})
const user = mongoose.model('staff', staffSchema);
module.exports = user;