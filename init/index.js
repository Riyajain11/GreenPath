const mongoose = require("mongoose"); 
const initData = require("./farmersData.js");
const FarmersListing = require("../models/farmersListing.js") ;

const MONGO_URL =  "mongodb://127.0.0.1:27017/greenpath"; 

main().then(() =>{
    console.log("Connected to db")
}).catch(err =>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}  


const initDB = async () =>{
  await FarmersListing.deleteMany({});
  await FarmersListing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB(); 