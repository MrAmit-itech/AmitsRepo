
const jwt = require('jsonwebtoken')
const { response } = require('..')
const User = require('../model/user.model')


const newToken = (user) =>{
    return jwt.sign({user: user}, process.env.JWT_ACCESS_KEY)
}

const register = async(req,res)=>{
    try {
        const respo = await User.create(req.body)
        const token = newToken(respo) 
        res.status(201).json({respo,token})
    } catch (e) {
        res.status(400).json({message:e.message , status:'failed' })
    }
}



const login = (req,res)=>{
    res.status(201).send("login")
}

module.exports = {register, login}