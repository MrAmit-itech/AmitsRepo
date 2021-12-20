const mongoose = require("mongoose")

const weatherSchema = new mongoose.Schema({
    city_name: {type: String, required:true},
    max_temp:{type: Number, required:true},
    min_temp: {type: Number, required: true},
    possibility_of_rain:{type:Number, required: true},
    humidity:{type:Number, required: true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("weather_forecast",weatherSchema)