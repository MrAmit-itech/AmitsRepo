const express = require('express')
const userController = require('../src/controller/user_get.controller')
const bookController = require('../src/controller/books.controller')



const app = express()
app.use(express.json())


app.use("/user",userController)
app.use("/books",bookController)


module.exports = app

