const mongoose = require('mongoose')

const topic_schema =  mongoose.Schema({
    topic_name:{type:String , required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('topic',topic_schema)