const mongoose = require('mongoose')

const result_schema = new mongoose.Schema({
    student_id:{
       type:mongoose.Schema.Types.ObjectId,
        ref:'student',
        required:true
    },
    marks:{type:Number, required:false}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('result',result_schema)