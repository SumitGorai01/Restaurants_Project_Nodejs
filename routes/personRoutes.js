const express = require('express')
const router = express.Router();
const Person = require('./../models/person');


router.get('/',async (req,res)=>{
    try {
        const data = await Person.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ erorr: "internal server error" });
    }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body; //assuming the request body contains the person data

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ erorr: "internal server error" });
  }
});


router.get('/:workType', async (req,res)=>{
    try {
      const workType = req.params.workType;
      if(workType == 'chef' || workType == 'owner' || workType == 'waiter'){
  
        const response = await Person.find({work : workType});
  
        res.status(200).json(response);
  
      }else{
        res.status(404).json({error : 'Invalid work Type'})
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({error : 'Internal server error.'})
    }
  })

router.put('/:id', async (req , res)=>{
    try {

        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId , updatedPersonData,{
            new : true,
            runValidators : true
        })

        if(!response){
            return res.status(404).json({error : 'Person not found'})
        }

        console.log('data updated..');
        res.status(200).json(response)

    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'Internal server error'})
    }
})

router.delete('/:id',async (req,res)=>{
    try {
        
        const personId = req.params.id;
        const deletePerson = await Person.findByIdAndDelete(personId);

        if(!deletePerson){
            console.log('invalid id')
            res.status(404).json({error : 'Person not found.'})
        }
        console.log('data deleted..')
        res.status(200).json(deletePerson);

    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'internal Server error.'})
    }
})

module.exports = router;