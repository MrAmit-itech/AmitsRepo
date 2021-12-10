const express = require('express')

const eval_controller = require('./controller/eval.controller')
const student_controller = require('./controller/students.controller')
const topic_controller = require('./controller/topic.controller')
const user_controller = require('./controller/user.controller')
const result_controller = require('./controller/result.controller')






const app = express()
app.use(express.json())

app.use('/eval',eval_controller)
app.use('/student',student_controller)
app.use('/topic',topic_controller)
app.use('/user',user_controller)
app.use('/result',result_controller)


module.exports = app





