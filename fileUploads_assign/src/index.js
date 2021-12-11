const express = require('express')
const user_controller = require('./controllers/user.controller')
const gallary_controller = require('./controllers/gallary.controller')


const app = express()

app.use(express.json())
app.use('/user',user_controller)
app.use('/gallary',gallary_controller)

module.exports = app