const express = require('express')
const Show = require('../model/shows.model')

const router = express.Router()

router.get("/",async(req,res)=>{
    try {
        const respo = await Show.find().lean().exec()
        res.status(201).send(respo)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})

router.post("/",async(req,res)=>{
    try {
        const respo = await Show.create(req.body)
        res.status(201).send(respo)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})

router.get("/shows/:id",async(req,res)=>{
    try {
        const respo = await Show.find().populate('screen').select(['timing','movie','screen']).lean().exec()
        var out = []
        respo.forEach((el)=>{
            if(el.movie == req.params.id){
                out.push(el)
            }
        })
        res.send(out)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})

router.get("/seats/:id",async(req,res)=>{
    try {
        const respo = await Show.find().populate('screen').lean().exec()
        var out = []
        respo.forEach((el)=>{
            if(el.movie == req.params.id){
                out.push(el.total_seats)
            }
        })
        res.send(out)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})



module.exports = router