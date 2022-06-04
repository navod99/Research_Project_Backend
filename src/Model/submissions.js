const mongoose = require("mongoose");
const submissionSchema = new mongoose.Schema ({
    name: {
        type: String,
    },
    avatar:{
        type: String
    },
    groupID:{
        type: String
    },
    cloudinary_id: {
        type: String
    },
    time:{
        type: String
    }
});

module.exports = mongoose.model("submission",submissionSchema);