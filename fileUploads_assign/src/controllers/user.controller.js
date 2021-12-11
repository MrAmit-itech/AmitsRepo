const express = require('express')
const upload = require('../middlewares/upload')
const User = require('../model/user.model')
const router = express.Router()



router.post('/',upload.single('profile_pic'),async(req,res)=>{
    try {
        const respo = await User.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            profile_pic:req.file.path

        })
        res.send(respo)
    } catch (e) {
        res.status(500).json({message:e.message , status:"failed"})
    }
})

router.get("/",async(req,res)=>{
    const respo = await User.find().lean().exec()
    res.send(respo)
})

module.exports = router