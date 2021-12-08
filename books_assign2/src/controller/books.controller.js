const mock = require('../user_data.json')
const express = require('express')
const Book = require('../model/books.model')

const router = express.Router()

router.post("/",async(req,res)=>{
    const respo =  await Book.create(mock)
    res.send(respo)
})

router.get("/",async(req,res)=>{
    const respo =  await Book.find().lean().exec()
    res.send(respo)
})

router.patch("/:id",async(req,res)=>{
    const respo = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
    res.send(respo)
})

router.delete("/:id",async(req,res)=>{
    const respo = await Book.findByIdAndDelete(req.params.id).lean().exec()
    res.send(respo)
})

router.get("/:id",async(req,res)=>{
    const respo = await Book.findById(req.params.id).lean().exec()
    res.send(respo)
})



module.exports = router