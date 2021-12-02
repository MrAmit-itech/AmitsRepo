const User = require('../model/user.model')
const express = require('express')
const sendmail = require('../utils/send_mail')


const router = express.Router()

router.get('/',async(req,res)=>{
    try {

        const page =  +req.query.page || 1
        const size = +req.query.size || 2 
        const skip = (page-1)*size 
        const get_entry = await User.find().skip(skip).limit(size).lean().exec()
        const totalPages = Math.ceil(await User.find().countDocuments()/size)
        
        res.json({get_entry,totalPages})
    } catch (e) {
        res.status(500).send({message:e.message,status:"failed"})
    }
})

router.post('/',async(req,res)=>{
    try {
        const post_entry = await User.create(req.body)
        sendmail(
            "",
            `${req.body.email}`,
            `Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,
            `Hi ${req.body.first_name}, Please confirm your email address`,
            "",
            )

        const to_array =[
            "A@v.com",
            "b@s.com",
            "c@1.com",
            "hj@12.com",
            "kl@56.com"
        ]
        const to_str = to_array.join(" ")
        
        sendmail(
           "",
           `ADMINS${to_str}`,
           `${req.body.first_name} ${req.body.last_name} has registered with us`,
           `Please welcome ${req.body.first_name} ${req.body.last_name}`
        )


       
          
        res.status(201).send(post_entry)
    } catch (e) {
        res.status(500).send({message:e.message,status:"failed"})
    }
})

module.exports = router