const mongoose = require('mongoose')

const section_schema = new mongoose.Schema({
    section_name:{type:String , required:true},
    book_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'book',
        required:false
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('section',section_schema)
