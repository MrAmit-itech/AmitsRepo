const express = require('express')
const user_controller = require('./controller/user.controller')

const app = express()

app.use(express.json())

app.use("/user",user_controller)

module.exports = app