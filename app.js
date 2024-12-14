const express = require("express")
const app = express()
const nodemon = require("nodemon")
const db= require('./db')
 require('dotenv').config()



const bodyparser= require('body-parser')
app.use(bodyparser.json())

const PORT = process.env.PORT||3000



app.get('/',(req,res)=>{
    res.send("hello world3 from my hotel................and be my guest")
})

const personRoutes  = require('./routes/personRoutes')
app.use('/person',personRoutes)

const menuRoutes  = require('./routes/menuRoutes')
app.use('/Menu',menuRoutes)




app.listen(PORT,()=>{
    console.log("server is running on 3000")
})