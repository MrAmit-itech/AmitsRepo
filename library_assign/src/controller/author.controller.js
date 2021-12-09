const express = require('express')
const Author = require('../model/author.model')

const router = express.Router()

router.get('/',async(req,res)=>{
    const respo = await Author.find().lean().exec()
    res.send(respo)
})

router.post('/',async (req,res)=>{
    const respo = await Author.create(req.body)
    res.send(respo)
})

module.exports = router
