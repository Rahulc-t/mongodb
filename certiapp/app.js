const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
port = 3000

app.listen(port, () => {
    console.log("server running");
})

mongoose.connect("mongodb://localhost:27017/certiapp")
const database = mongoose.connection
database.on("error", (err) => {
    console.log(err);
})
database.once("connected", () => {
    console.log("database connected");
})

const routes=require("./routes.js")
app.use(express.json())
app.use("/",routes)

