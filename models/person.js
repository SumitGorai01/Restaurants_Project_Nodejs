const mongoose = require('mongoose')

//define the person schema
const personSchema = {
    name:{
        type : String,
        required : true
    },
    age:{
        type:Number
    },
    work:{
        type : String,
        enum :['chef','waiter','owner'],
        required : true
    },
    mobile:{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    address:{
        type : String,
    },
    salary : {
        type : Number,
        required :true
    }
}

//create person model
const Person = mongoose.model('Person',personSchema);

module.exports = Person;