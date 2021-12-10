const express = require('express')
const User_model = require('../model/user.model')

const router = express.Router()

router.get('/',async(req,res)=>{
    try {
        const respo = await User_model.find().lean().exec()
        res.send(respo)
    } catch (e) {
        res.status(500).json({message:e.message,status:'failed'})
    }
})

router.post('/',async(req,res)=>{
    try {
        const respo = await User_model.create(req.body)
        res.send(respo)
    } catch (e) {
        res.status(500).json({message:e.message,status:'failed'})
    }
})

module.exports = router
