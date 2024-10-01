const mongoose = require('mongoose')

//define the mongoDB url
const mongoUrl = 'mongodb://localhost:27017/hotel';

//set up MongoDB Connection
mongoose.connect(mongoUrl);

//get the default connection
const db =mongoose.connection;

//define event listener for database connection
db.on('connected',()=>{
    console.log('MongoDB connected...')
})

db.on('error',()=>{
    console.log('error while connecting with mongoDB...')
})

db.on('disconnected',()=>{
    console.log('MongoDB disconnected...')
})

//Export the database connection

module.exports = db;