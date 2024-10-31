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
    type: {
        type: String,
        
    },
    date:{
        type: Number,
        
    },
    image: {  
        type: String,
    
    }
});

 
const Tuning = mongoose.model("Tuning", motorSchema);

module.exports = Tuning;