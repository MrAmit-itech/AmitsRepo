const mongoose = require('mongoose')


const movie_schema = new mongoose.Schema({
    name:{type:String , required:true},
    actors:[{type:String ,required:true}],
    languages :[{type:String , required:true}],
    directors :[{type:String , required:true}]
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('movie',movie_schema)