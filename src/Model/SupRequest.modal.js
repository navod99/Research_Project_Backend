const mongoose = require('mongoose');

const suprequest = mongoose.Schema({
    groupid: {
        type: String,
        required:true
    },
    supervisorID: {
        type: String, 
        required:true
    },
   
    status: {
        type: String,
        required:true
    }
    
    
})

const supReq = mongoose.model("supervisorRequest", suprequest);
module.exports = supReq;