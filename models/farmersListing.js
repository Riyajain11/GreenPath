const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const farmersSchema = new Schema({
    name: String, 
    city: String,
    state: String, 
    country: String,
    items: String, 
    image: String,
    price: Number,
    
});

const FarmersListing = mongoose.model("FarmersListing" ,farmersSchema);
module.exports = FarmersListing;