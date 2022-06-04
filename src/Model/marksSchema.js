const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const marksSchema = new Schema({

groupID: {
    type:Number,
    required:true,
},
Marks: {
    type:Number,
    required:true,
},
Comments: {
    type:String,
    required:true,
}

});

const Mark = mongoose.model("Mark", marksSchema)

module.exports = Mark;