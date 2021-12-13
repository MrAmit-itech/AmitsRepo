const app = require('./index')
const connect = require('./config/db')

app.listen(3113, async()=>{
    await connect()
    console.log('listening on port 3113')
})