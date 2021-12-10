const express = require('express')
const Result_model = require('../model/result.model')

const router = express.Router()

router.get('/',async(req,res)=>{
    try {
        const respo = await Result_model.find().populate('student_id').lean().exec()
        res.send(respo)
    } catch (e) {
        res.status(500).json({message:e.message,status:'failed'})
    }
})

router.post('/',async(req,res)=>{
    try {
        const respo = await Result_model.create(req.body)
        res.send(respo)
    } catch (e) {
        res.status(500).json({message:e.message,status:'failed'})
    }
})

router.get('/maxmarks',async(req,res)=>{
    try {
        var out = []
        const respo_origin = await Result_model.find().populate('student_id').lean().exec()
        const respo_max = await Result_model.find().select('marks').lean().exec()
        respo_max.forEach((el)=>{
            out.push(el.marks)
        })
       var max = Math.max(...out)
        
       respo_origin.forEach((el)=>{
           if(el.marks == max){
                res.send(el.student_id)
           }
       })
       
    } catch (e) {
        res.status(500).json({message:e.message,status:'failed'})
    }
})

module.exports = router
