const mongoose = require("mongoose");

const uri = "MONGODB_URI";
// students is database name 

mongoose.connect(uri);

// we need to create a schema 
const data_schema = new mongoose.Schema({
        name:String,
        school: String,
        age : Number,
        gender:String

});

// now we neeed to create a model 
const student_data = new mongoose.model('Collection1',data_schema)

const data1 =  {
    name: "khushi", // Added quotes around strings
    school: "gmssss",
    age: 15,
    gender: "female"

};

const main = async()  =>{
    try {
    
     
        // inserting documents 
        await student_data.insertMany([data1]);



         const data = await student_data.find({age :{$eq : 15}});
        console.log(data);

    } catch (error) {
        console.log(error);
        
    }finally{
        mongoose.connection.close();
    }
};

main();
