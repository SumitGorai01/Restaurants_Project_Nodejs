const mongoose = require('mongoose');
require('dotenv').config();

//define the mongoDB url
// const mongoUrl_Local = process.env.LOCAL_DB_URL;
const mongoUrl = process.env.DB_URL;

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