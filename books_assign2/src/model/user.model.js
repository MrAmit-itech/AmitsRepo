const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
   user_name:{type:String , required:true}
})

const User = mongoose.model("user",user_schema)

module.exports = User