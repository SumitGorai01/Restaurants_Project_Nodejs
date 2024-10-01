// console.log('server is stated..')

const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require('body-parser');
app.use(bodyParser.json());


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


app.listen(1100, () => {
  console.log("listening to port 1100");
});
console.log("Server is started..");
