const express = require('express')

const router = express.Router()
 
const MenuItem= require('../models/MenuItem')


router.post('/',async(req,res)=>{
    try{
        const data = req.body
    const newMenu = new MenuItem(data)
     const response = await newMenu.save()
     console.log('data saved')
     res.status(200).json(response)
     
    }


    catch(err){
        console.log('err')
        res.status(500).json({error:'internal server error'})

    }
})

router.get('/',async (req,res)=>{
    try{
        const data = await MenuItem.find()
        console.log('data fetched')
     res.status(200).json(data)

    }catch(err){

        console.log('err')
        res.status(500).json({error:'internal server error'})

    }
})
router.get('/:taste',async (req,res)=>{
    try{

        const taste = req.params.taste
        if(taste=="sweet"||taste=="sour"||taste=="spicy"){
            const response = await MenuItem.find({taste:taste})
            res.status(200).json(response)
        }else{
            console.log({error:'internal server error'})
        }
       
     

    }catch(err){

        console.log('err')
        res.status(500).json({error:'internal server error'})

    }
})

router.put('/:id', async(req,res)=>{
    try{
        const personid = req.params.id 
    const updatedpersondata = req.body
    const response = await MenuItem.findByIdAndUpdate(personid,updatedpersondata,{
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
     const response = await MenuItem.findByIdAndDelete(personid)
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