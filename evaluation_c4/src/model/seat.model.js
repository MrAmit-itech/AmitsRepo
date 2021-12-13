const mongoose = require('mongoose')


const seat_schema = new mongoose.Schema({
    show_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'show',
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('seat',seat_schema)