const express = require('express')
const data = require('../user_data.json')
const User = require('../model/user.model')

const router = express.Router()

router.get("/",  async(req,res)=>{
    const respo =  await User.find({},{user_name: 1}).lean().exec()
    res.send(respo)
})

router.post("/",async(req,res)=>{
    const respo = await User.create(req.body)
    res.send(respo)
})

router.get("/:id", async(req,res)=>{
    const respo = await User.findById(req.params.id,{user_name:1}).lean().exec()
    res.send(respo)
})

module.exports = router