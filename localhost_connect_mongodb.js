const {MongoClient} = require("mongodb");

// connecting with localhost
const uri = 'mongodb://127.0.0.1';

const client = new MongoClient(uri);

const data1 = {
     
    name: 'priya',
    age: 18,
    gender: 'female'
  };

const main = async()  =>{
    await client.connect();
    const db = client.db('students');
    const collection = db.collection('data');
    
    await collection.insertOne(data1);

    const value = await collection.find({age :{$gt: 5}}).toArray();
    console.log(value);
    return "done";
};

main().then(console.log()).catch((e)=>console.log(e)).finally(() => client.close());
 