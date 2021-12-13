const mongoose = require('mongoose')


const theatre_schema = new mongoose.Schema({
    name:{type:String , required:true},
    location:{type:String , required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('theatre',theatre_schema)