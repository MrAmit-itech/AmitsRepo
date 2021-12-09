const Section = require('../model/section.model')
const Author = require('../model/author.model')

const express = require('express')

const router = express.Router()

router.get('/', async(req,res)=>{
    const respo = await Section.find().populate("book_id").lean().exec()
    console.log(respo)
    res.send(respo)
})

router.post('/', async(req,res)=>{
    const respo = await Section.create(req.body)
    res.send(respo)
})

router.get('/books', async(req,res)=>{
    const respo = await Section.find().populate("book_id").lean().exec()
    var out = []
    respo.forEach((el)=>{out.push(el.book_id.name)})
    res.send(out)
})

router.get('/notChecked', async(req,res)=>{
    const respo = await Section.find().populate("book_id").lean().exec()
    var out = []
    respo.forEach((el)=>{if(el.book_id.checked_out == "No"){
        out.push(`${el.book_id.name} is not checked out`)
    }})
    res.send(out)
})

router.get('/oneAuthor/:id', async(req,res)=>{
    var out = []
    
    const respo = await Section.find().populate("book_id").lean().exec()
    respo.forEach((el)=>{
        if(el.book_id.auth_id == req.params.id){
        out.push(el.book_id)
    }})
    
    console.log(out)
    res.send(out)
    console.log("--------------------------------")
    
})


module.exports = router