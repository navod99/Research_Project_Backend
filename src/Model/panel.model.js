const mongoose = require('mongoose');
const { array } = require('../utils/multer');

const panelSchema = new mongoose.Schema({
    panelId: {
        type: String,
        required:true
    },
    panelName: {
        type: String,
        required:true
    },
    panelMembers: {
        type: Array,
        required:true
    }
})

const panel = mongoose.model("panel", panelSchema)
module.exports = panel