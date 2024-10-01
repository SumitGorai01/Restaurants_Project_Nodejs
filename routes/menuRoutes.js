const express = require('express')
const router = express.Router();
const MenuItem = require('./../models/MenuItem')


router.get('/',async (req,res)=>{
    try {
        const data = await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ erorr: "internal server error" });
    }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body; 
    const newItem = new MenuItem(data);
    const response = await newItem.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ erorr: "internal server error" });
  }
});

router.get('/:tasteType', async (req , res)=>{
    try {
        const tasteType = req.params.tasteType;
        if(tasteType == 'spicy' || tasteType == 'sour' || tasteType == 'sweet'){

            const response = await MenuItem.find({taste:tasteType})
            res.status(200).json(response)

        }else{
            res.status(404).json({error : 'Invalid taste type'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'Internal server error'});
    }
})

router.put('/:id',async (req,res)=>{
    try {
        
        const menuItemId = req.params.id;
        const updateMenuItemData = req.body;
        
        const response = await MenuItem.findByIdAndUpdate(menuItemId,updateMenuItemData,{
            new : true,
            runValidators : true
        })

        if(!response){
            return res.status(404).json({error :'Id not found'})
        }

        console.log('data updated..');
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'Internal server error'})
    }
})
router.delete('/:id',async (req,res)=>{
    try {
        
        const menuId = req.params.id;
        const deleteItem = await MenuItem.findByIdAndDelete(menuId);

        if(!deleteItem){
            console.log('invalid id')
            res.status(404).json({error : 'Item not found.'})
        }
        console.log('data deleted..')
        res.status(200).json(deleteItem);

    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'internal Server error.'})
    }
})
module.exports = router;