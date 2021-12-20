const express = require('express')
const {register ,login} = require('./controller/auth.controller')
const post = require('./controller/post.controller')
const app = express()

app.use(express.json())
app.use('/post',post)
app.post('/register', register)
app.post('/login', login)

module.exports = app