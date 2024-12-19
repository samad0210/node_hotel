const express = require("express")
const app = express()

const db= require('./db')
 require('dotenv').config()
 const passport = require('./auth')
 
const bodyparser= require('body-parser')
app.use(bodyparser.json())
const bcrypt = require('bcrypt')
const PORT = process.env.PORT||3000
const JWT_SECRET= process.env.JWT_SECRET


const logRequest = (req,res,next)=>{
    console.log(`${new Date().toLocaleString()} request made to :${req.originalUrl}`)
    next()
}

app.use(logRequest)


    


app.use(passport.initialize())

const LocalAuthMiddleware= passport.authenticate('local',{session:false})

app.get('/',(req,res)=>{
    res.send("hello world3 from my hotel................and be my guest")
})

const personRoutes  = require('./routes/personRoutes')
const menuRoutes  = require('./routes/menuRoutes')


app.use('/Menu',menuRoutes)
app.use('/person',personRoutes)




app.listen(PORT,()=>{
    console.log("server is running on 3000")
})