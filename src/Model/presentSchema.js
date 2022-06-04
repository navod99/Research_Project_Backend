const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const presentSchema = new Schema({

groupID: {
    type:Number,
    required:true,
},
Marks:{
    type:Number,
    required:true,
},
Comments:{
    type:String,
    required:true,
}

});

const Premark = mongoose.model("Premark", presentSchema)

module.exports = Premark;