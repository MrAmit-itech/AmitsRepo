const app = require("./index")
const connect = require("./config/db")

app.listen(2112,async()=>{
   await connect()
   console.log("Listening to port 2112")
})