const express = require('express')

const router = express.Router()

const person= require('../models/person')

router.post('/', async (req,res)=>{
    try{
        const data = req.body
    const newperson = new person(data)
     const response = await newperson.save()
     console.log('data saved')
     res.status(200).json(response)
    }


    catch(err){
        console.log('err')
        res.status(500).json({error:'internal serververror'})

    }
})

router.get('/',async (req,res)=>{
    try{
        const data = await person.find()
        console.log('data fetched')
     res.status(200).json(data)

    }catch{

        console.log('err')
        res.status(500).json({error:'internal serververror'})

    }
})






router.get('/:worktype',async(req,res)=>{
    try{
        const worktype = req.params.worktype
        if(worktype=='chef'||worktype=='manager'||worktype=='waiter'){

            const response = await person.find({work:worktype})
            res.status(200).json(response)
        
       
        }else{
            console.log({error:'internal server error'})

        }
    }catch{err}{
        console.log('err')
        res.status(500).json({error:'internal serververror'})
    }

})

router.put('/:id', async(req,res)=>{
    try{
        const personid = req.params.id 
    const updatedpersondata = req.body
    const response = await person.findByIdAndUpdate(personid,updatedpersondata,{
        new:true,
        runValidators:true
    })
    if(!response){
        return res.status(404).json({error:'person not found'})
    }
    console.log('data updated')
    res.status(200).json(response)
    }catch(err){
        console.log('err')
        res.status(500).json({error:'internal server error'})
    }
})

router.delete('/:id',async (req,res)=>{
   try{
    const personid= req.params.id
    const response = await person.findByIdAndDelete(personid)
    if(!response){
        return res.status(404).json({error:'person not found'})
    }
    
        console.log('data deleted')
        res.status(200).json({message:'data deleted succesfully'})
    
   }catch(err){
    console.log('err')
        res.status(500).json({error:'internal server error'})
   }
})

module.exports = router
