const mongoose = require('mongoose')

const book_schema = new mongoose.Schema({
    user:{type:String , required:true},
    author:{type:String,required:true},
    book_name:{type:String,required:true},
    pages:{type:Number , required:true},
    year:{type:Number , required:true}
})

const Book = mongoose.model("book",book_schema)
module.exports = Book 