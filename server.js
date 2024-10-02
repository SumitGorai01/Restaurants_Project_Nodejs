// console.log('server is stated..')

const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 1100;

app.get("/", function (req, res) {
  res.send("Welcome to our hotels..");
});

/*
app.get('/chicken',function(req,res){
    res.send('I like chicken')
})

app.get('/idli',(req,res)=>{
    let customized_idli = {
        name:'rava idli',
        size : '10cm',
        is_shambhar : true,
        is_chutny: false
    }

    res.send(customized_idli)
})
*/

/*
    // newPerson.name = data.name;
    // newPerson.age = data.age;
    // newPerson.mobile = data.mobile;
    // newPerson.email = data.email;
    // newPerson.address = data.address;
*/


const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);


const menuRoutes = require('./routes/menuRoutes')
app.use('/menu',menuRoutes);


app.listen(PORT, () => {
  console.log("listening to port",PORT);
});
console.log("Server is started..");
