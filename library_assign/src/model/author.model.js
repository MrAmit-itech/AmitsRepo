const mongoose = require('mongoose')

const author_schema = new mongoose.Schema({
    first_name:{type:String , required:true},
    last_name:{type:String , required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('author',author_schema)