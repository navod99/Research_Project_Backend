const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    GroupId: {
        type: String,
      required:true  
    },
    Members: {
        type: Array,
        required:true
    },
    RegNo: {
        type: Array,
        required:true
    },
    supervisorId: {
        type: String,
        required:false  
    },
    topic: {
        type: String,
        required:false
    },
    releatedArea: {
        type: String,
        required:false
    },
    panel: {
        type: String,
        required:false
    },
    year: {
        type: String,
        required:true
    }
    
})

const group = mongoose.model("group", groupSchema);
module.exports = group;