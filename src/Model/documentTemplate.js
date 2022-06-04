const mongoose = require("mongoose");
const documentSchema = new mongoose.Schema ({
    topic:{
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

module.exports = mongoose.model("documenttemplate",documentSchema);