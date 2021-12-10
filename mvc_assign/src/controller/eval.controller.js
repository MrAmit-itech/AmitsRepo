const express = require('express')
const Eval_model = require('../model/evalution.model')

const router = express.Router()

router.get('/',async(req,res)=>{
    try {
        const respo = await Eval_model.find().populate(["instructor_id","topic_id","student_id"]).lean().exec()
        res.send(respo)
    } catch (e) {
        res.status(500).json({message:e.message,status:'failed'})
    }
})

router.post('/',async(req,res)=>{
    try {
        const respo = await Eval_model.create(req.body)
        res.send(respo)
    } catch (e) {
        res.status(500).json({message:e.message,status:'failed'})
    }
})

router.get('/particular/:id',async(req,res)=>{
    try {var out = []
        const respo = await Eval_model.find().populate(["instructor_id","student_id"]).lean().exec()
        respo.forEach((el)=>{
            if(req.params.id == el.topic_id){
                out.push(el.student_id)
            }
        })
        res.send(out)
    } catch (e) {
        res.status(500).json({message:e.message,status:'failed'})
    }
})

module.exports = router
