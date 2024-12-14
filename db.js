const mongoose = require ('mongoose')
require('dotenv').config()

//const mongoURL = 'mongodb://localhost:27017/hotels ';

const mongoURL= process.env.MongoDB_url


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));
    

const db = mongoose.connection;




module.exports=db;
