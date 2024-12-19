const passport = require('passport')
 const LocalStrategy = require('passport-local').Strategy
 const person =require('./models/person')
 const bcrypt = require('bcrypt')


passport.use(new LocalStrategy(async (username,password,done)=>{
try{
        console.log('recieved credentilas:',username,password)
     const user = await  person.findOne({username:username})
     if(!user){
    return done(null,false,{message:'incorrect username'})
     }
     const isPasswordMatch = await user.comparepassword(password)
     if(isPasswordMatch){
        return done(null,user)
     }else{
        return done(null , false , {message:'incorrect password'})
     }
    }catch(err){
    return done (err)
    }
}))

module.exports=passport