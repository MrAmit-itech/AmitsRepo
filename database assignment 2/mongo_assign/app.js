const { application } = require('express')
const express = require('express')
const mongoose = require('mongoose')

const connect = ()=>{
    return mongoose.connect(" mongodb://127.0.0.1:27017/entertainment")
}

const userSchema = new mongoose.Schema({
        id : {type:Number, required:true},
        movie_name : {type:String, required:true},
        movie_genre : {type:String, required:true},
        production_year : {type:Number , required:true},
        budget : {type:Number , required:true}
})

const User = mongoose.model('users' ,userSchema)

//-------------------------------

const app = express()
app.use(express.json());

app.post("/users",async (req,res)=>{
    const user = await User.create(req.body)
    res.status(201).send(user)
})

app.get("/users", async (req,res)=>{
    const users = await User.find().lean().exec()
    res.send({users})
})

app.get("/users/:id", async (req,res)=>{
    const user = await User.findById(req.params.id).lean().exec()
    res.send({user})
})

app.patch("/users/:id",async (req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(201).send(user)
})


app.delete("/users/:id", async(req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id).lean().exec()
    res.status(200).send(user)
})



app.listen(2344,async function(){
    await connect()
    console.log("listening on port 2344")
})