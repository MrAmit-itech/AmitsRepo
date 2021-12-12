const express = require('express')
const router = express.Router()
const User = require('../model/user.model')
const { body , validationResult } = require('express-validator');

router.get("/", async(req,res)=>{
    try {
        const respo = User.find().lean().exec()
        res.send(respo)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})

router.post("/",

    body('email').isEmail().withMessage('enter correct email format'),
    body('pincode').isLength({min:6 , max:6}).withMessage('enter six digit pincode'),
    body('age').custom((value)=>{
        if(value < 0 || value > 100){
            throw new Error('plz enter age ubder 100 and above -1')
        }
        return true
    }),
    body('gender').custom((value)=>{
        var arr = ['male','female','others']
        var flag = true
        arr.forEach((el)=>{
            if(el == value){
                flag = false
            }
        })
        if(flag){
            throw new Error('plzz enter corect detail')
        }
        return true
    })
    ,
    async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var newerror = errors.array().map(({msg ,param , location })=>{
            return {
                [param]:msg
            }
        })
        return res.status(400).json({ errors: newerror });
    }
    try {
        const respo = User.find().lean().exec()
        res.send(respo)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})



module.exports = router