const mongoose = require("mongoose");

const SubmissionTypeSchema = new mongoose.Schema({
    submissionType: { 
        type: String, 
        required: true 
    },
    date:{
        type:String, 
    },
    time:{
        type:String, 
    },
    specialMessage: { 
        type: String, 
    },
    
})

const SubmissionType = mongoose.model('SubmissionType', SubmissionTypeSchema);
module.exports = SubmissionType;