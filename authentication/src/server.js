const app = require('./index')
const connect = require('./config/db')

app.listen(2002,async()=>{
    await connect()
    console.log("listening on port 2002")
})
