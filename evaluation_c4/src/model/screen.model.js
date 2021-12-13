const mongoose = require('mongoose')


const screen_schema = new mongoose.Schema({
    name:{type:String , required:true},
    theatre_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'theatre',
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('screen',screen_schema)