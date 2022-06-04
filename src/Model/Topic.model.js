const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
   
    groupId: {
        type: String,
        required: true
    },
   
    topic: {
        type: String,
        required: true,

    },
    topicDes: {
        type: String,
        required: true
    },

    reletedArea: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required:true
    }
})

const topic = mongoose.model("topic", topicSchema);
module.exports = topic;

