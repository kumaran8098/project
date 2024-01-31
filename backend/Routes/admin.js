const express = require('express');
const router = express.Router();
const client = require('../connection');
const { ObjectId } = require('mongodb');

router.get('/', async(req, res) => {
    let result = await client.db('schoolmanagement').collection('Admin').find({}).toArray();
    res.send(result);
});

router.post('/',async(req,res)=>{
    let data ={
        
        name:req.body.name,
        pass:req.body.pass,
        Qulification:req.body.Qulification,
       Age:req.body.Age,
       District:req.body.District,
       Gender:req.body.Gender
        
        
    };
    await client.db("schoolmanagement").collection('Admin').insertOne(data)
    res.send('data inserted')
})
router.put('/update/:id',async(req,res)=>{
    await client.db('schoolmanagement').collection('Admin').updateOne(
        {_id:new ObjectId(req.params.id)},
            {$set:{Age:req.body.Age}}
            
        
    )
    res.send("Updated......")
})
router.delete('/delete/:id', async (req, res) => {
    await client.db("schoolmanagement").collection("Admin").findOneAndDelete(
        { _id: new ObjectId(req.params.id) }
    );
    res.send("Deleted....");
});

    

module.exports = router;


































    
