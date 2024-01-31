const{MongoClient}=require('mongodb')
const uri="mongodb://0.0.0.0:27017";
let client={}
try{
    client=new MongoClient(uri, {
        useNewUrlparser:true, useUnifiedTopology: true})
       console.log("DB connected");
    }catch(err){
        console.log(err)
        console.log("Error while connecting with DB")
    }
    module.exports=client;