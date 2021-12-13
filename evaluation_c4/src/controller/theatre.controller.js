const express = require('express')
const Theatre = require('../model/theatre.model')

const router = express.Router()

router.get("/",async(req,res)=>{
    try {
        const respo = await Theatre.find().lean().exec()
        res.status(201).send(respo)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})

router.post("/",async(req,res)=>{
    try {
        const respo = await Theatre.create(req.body)
        res.status(201).send(respo)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})

router.get("/nearest/:city",async(req,res)=>{
    try {
        const respo = await Theatre.find().lean().exec()
        var out = []
        respo.forEach((el)=>{
            if(el.location == req.params['city']){
                out.push(el)
            }
        })
        res.send(out)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})



module.exports = router