const mongoose = require('mongoose')

const book_schema = new mongoose.Schema({
    auth_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'author',
        required:false
    },
    name:{type:String , required:true},
    body:{type:String , required:true},
    checked_out:{type:String ,default:"No"}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('book',book_schema)