const mongoose = require("mongoose");
const markingSchema = new mongoose.Schema ({
    name: {
        type: String,
    },
    avatar:{
        type: String
    },
    cloudinary_id: {
        type: String
    },
    time:{
        type: String
    }
});

module.exports = mongoose.model("markingSchema",markingSchema);