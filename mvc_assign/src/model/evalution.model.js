const mongoose = require('mongoose')

const eval_schema  = new mongoose.Schema({
    date_of_eval:{type:String , required:true},
    instructor_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    topic_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'topic',
        required:true
    },
    student_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'student',
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('eval',eval_schema)