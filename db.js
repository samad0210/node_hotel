const mongoose = require ('mongoose')
require('dotenv').config()

const mongoURL =process.env.MONGODB_URL_LOCAL 

//const mongoURL= process.env.MONGODB_URL


mongoose.connect(mongoURL, {
    
  })
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));
    

const db = mongoose.connection;




module.exports=db;
