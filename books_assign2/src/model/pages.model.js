const mongoose = require('mongoose')

const page_schema = new mongoose.Schema({
    pages_count :{type:Number , required:true}
})

const Pages = mongoose.model("pages",page_schema)

module.exports = Pages
