const express = require('express');
const router = express.Router();
const client = require('../connection');
const { ObjectId } = require('mongodb');

router.get('/', async(req, res) => {
    let result = await client.db('schoolmanagement').collection('student').find({}).toArray();
    res.send(result);
});

router.post('/',async(req,res)=>{
    let data ={
        
        name:req.body.name,
        date:req.body.date,
        age:req.body.age,
        Gender:req.body.Gender,
        Class:req.body.Class,
        Blood:req.body.Blood,
        father:req.body.father,
        Mother:req.body.Mother,
        occupption:req.body.occupption,
        address:req.body.address
        
        
    };
    await client.db("schoolmanagement").collection('student').insertOne(data)
    res.send('data inserted')
})
router.put('/update/:id',async(req,res)=>{
    await client.db('schoolmanagement').collection('student').updateOne(
        {_id:new ObjectId(req.params.id)},
            {$set:{name:req.body.name}}
            
        
    )
    res.send("Updated......")
})
router.delete('/delete/:id', async (req, res) => {
    await client.db("schoolmanagement").collection("student").findOneAndDelete(
        { _id: new ObjectId(req.params.id) }
    );
    res.send("Deleted....");
});

    

module.exports = router;


































    
