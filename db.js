const mongoose = require ('mongoose')

const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect('mongodb://localhost:27017/hotels')
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

const db = mongoose.connection;




module.exports=db;
