const express = require('express')
const Seat = require('../model/seat.model')

const router = express.Router()

router.get("/",async(req,res)=>{
    try {
        const respo = await Seat.find().lean().exec()
        res.status(201).send(respo)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})

router.post("/",async(req,res)=>{
    try {
        const respo = await Seat.create(req.body)
        res.status(201).send(respo)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})



module.exports = router