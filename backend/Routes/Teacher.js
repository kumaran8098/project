const express = require('express');
const router = express.Router();
const client = require('../connection');
const { ObjectId } = require('mongodb');

router.get('/', async(req, res) => {
    let result = await client.db('schoolmanagement').collection('teacher').find({}).toArray();
    res.send(result);
});

router.post('/',async(req,res)=>{
    
    let data ={
        
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        Gender:req.body.Gender,
        date:req.body.date,
        addAddress:req.body.addAddress,
        MobileNo:req.body.MobileNo,
        Qulification:req.body.Qulification,
        Experience:req.body.Experience,
        Class:req.body.Class
        
    }
    await client.db("schoolmanagement").collection('teacher').insertOne(data)
    res.send('data inserted')
})
router.put('/update/:id',async(req,res)=>{
    const {name,email,age,Gender,date,addAddress,MobileNo,Qulification,Experience,Class:teacherclass}=req.body
    await client.db('schoolmanagement').collection('teacher').updateOne(
        {_id:new ObjectId(req.params.id)},
            {$set:{
                name:name,
                email:email,
                age:age,
                Gender:Gender,
                date:date,
                addAddress:addAddress,
                MobileNo:MobileNo,
                Qulification:Qulification,
                Experience:Experience,
                Class:teacherclass   

            }},   
    )
    res.send("Updated......")
})
router.delete('/delete/:id', async (req, res) => {
    await client.db("schoolmanagement").collection("teacher").findOneAndDelete(
        { _id: new ObjectId(req.params.id) }
    );
    res.send("Deleted....");
});

    

module.exports = router;


































