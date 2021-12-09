const express = require('express')
const Book = require('../model/books.model')

const router = express.Router()

router.get('/',async(req,res)=>{
    const respo = await Book.find().populate("auth_id").lean().exec()
    res.send(respo)
})

router.post('/',async(req,res)=>{
    const respo = await Book.create(req.body)
    res.send(respo)
})

router.get('/checked',async(req,res)=>{
    const respo = await Book.find({checked_out: "yes"},{name: 1, checked_out: 1}).lean().exec()
    res.send(respo)
})

router.get('/BooksByAuthor',async(req,res)=>{
    const respo = await Book.find({},{name: 1, auth_id: 1}).populate("auth_id").lean().exec()
    res.send(respo)
})
module.exports = router
