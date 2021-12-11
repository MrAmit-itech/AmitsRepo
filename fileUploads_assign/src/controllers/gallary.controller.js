const express = require('express')
const upload = require('../middlewares/upload')
const Gallary = require('../model/gallery.model')
const router = express.Router()

router.post('/',async(req,res)=>{
    try {
        const respo = await User.create(req)
        res.send(respo)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})


module.exports = router