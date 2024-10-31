const mongoose = require("mongoose");

const motorSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    brand: {
        type: String,
        
       
    },
    cost: {
        type: Number,
        
    },
    company: {
        type: String,
        
    },
    license: {
        type: String,
        
    },
    location: {
        type: String,
        
    },
    people: {
        type: Number,
        
    },
    rate: {
        type: Number,
        
    },
    date:{
        type: Number,
        
    },
    image: {  
        type: String,
    
    }
});

 
const Caravan = mongoose.model("Caravan", motorSchema);

module.exports = Caravan;