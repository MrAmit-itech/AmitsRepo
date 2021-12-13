const express = require('express')
const Movie = require('../model/movie.model')
const upload = require('../middlewares/upload')
const router = express.Router()

router.post("/",async(req,res)=>{
    try {
        const respo = await Movie.create(req.body)
        res.status(201).send(respo)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})

router.get("/",async(req,res)=>{
    try {
        const respo = await Movie.find().lean().exec()
        res.status(201).send(respo)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})

router.get("/movies/:actor",async(req,res)=>{
    try {
        const respo = await Movie.find().lean().exec()
        var out = []
        respo.forEach((el)=>{
            if(el.actors.find((el)=>{el == req.params['actor']})){
                out.push(el)
            }
        })
        res.status(201).send(respo)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})


module.exports = router