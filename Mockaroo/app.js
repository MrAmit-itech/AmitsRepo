const data = require('./MOCK_DATA (1).json')
const express = require('express')
const app = express()

app.listen(2555,()=>{   
    console.log('listening on port 2555')
})

app.get('/',(req,res)=>{
    res.send ("Welcome to Home page")
})

app.get('/user',(req,res)=>{

    res.send(data)
})

console.log(data)