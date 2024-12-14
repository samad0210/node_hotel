const express = require("express")
const app = express()
const nodemon = require("nodemon")
const db= require('./db')



const bodyparser= require('body-parser')

app.use(bodyparser.json())



app.get('/',(req,res)=>{
    res.send("hello world3 from my hotel................and be my guest")
})

const personRoutes  = require('./routes/personRoutes')
app.use('/person',personRoutes)

const menuRoutes  = require('./routes/menuRoutes')
app.use('/Menu',menuRoutes)




app.listen(3000,()=>{
    console.log("server is running on 3000")
})