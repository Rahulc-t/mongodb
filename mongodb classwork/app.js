let express=require("express")

let {mongoose}=require('mongoose')
const routes=require('./routes.js')

let app=express()
port=3000

app.listen(port,()=>{
    console.log("server running");
})

app.use(express.json())
app.use('/',routes)

mongoose.connect('mongodb://localhost:27017/student')

const database=mongoose.connection;
database.on("error",(error)=>{
    console.log(error)
})
database.once("connected",()=>{
    console.log("database connected")
})