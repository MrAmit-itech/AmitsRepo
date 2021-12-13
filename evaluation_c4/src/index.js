const express = require('express')

const movie_controller = require('./controller/movie.controller')
const theatre_controller = require('./controller/theatre.controller')
const user_controller = require('./controller/user.controller')
const show_controller = require('./controller/show.controller')
const seat_controller = require('./controller/seat.controller')
const screen_controller = require('./controller/screen.controller')






const app = express()

app.use(express.json())

app.use('/movie' , movie_controller)
app.use('/theatre' , theatre_controller)
app.use('/user' , user_controller)
app.use('/show' , show_controller)
app.use('/seat' , seat_controller)
app.use('/screen' , screen_controller)






module.exports = app