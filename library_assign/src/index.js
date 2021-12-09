const express = require('express')
const section_controller = require('./controller/section.controller')
const book_controller = require('./controller/books.controller')
const author_controller = require('./controller/author.controller')


const app = express()
app.use(express.json())

app.use('/section',section_controller)
app.use('/books',book_controller)
app.use('/author',author_controller)



module.exports = app