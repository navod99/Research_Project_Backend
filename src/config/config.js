const mongoose = require("mongoose");

const URI = "mongodb+srv://seran:nAvindu99@cluster0.hucbn.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    await mongoose.connect(URI);
    console.log("Database Connected");
    
}

module.exports = connectDB;