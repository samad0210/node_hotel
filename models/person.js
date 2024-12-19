const mongoose = require ('mongoose')
const bcrypt = require('bcrypt')

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    
    mobile:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true

    },
    password:{
        required:true,
        type:String
    }
})

personSchema.pre('save', async function(next){
    const person = this
    if(!person.isModified('password')) return next()
    try{
      const salt = await bcrypt.genSalt(10)
      const hashedpassword = await bcrypt.hash(person.password,salt)
      person.password=hashedpassword
      next()
    }catch(err){
        return next(err)

    }
   
})

personSchema.methods.comparepassword= async function(candidatePassword){
    try{
     const isMatche = await bcrypt.compare(candidatePassword,this.password)
    return isMatche
    
    }catch(err){
    throw err
    }
}

const person = mongoose.model('person',personSchema)
module.exports=person