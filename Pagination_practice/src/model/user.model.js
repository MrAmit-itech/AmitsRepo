const {Schema,model} = require('mongoose')

const user_schema = Schema({
    first_name:{type:String , required:true},
    last_name:{type:String , required:true},
    email:{type:String , required:true}
})

module.exports = model('user',user_schema)