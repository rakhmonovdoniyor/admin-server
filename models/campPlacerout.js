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


    location: {
        type: String,
        
    },


    image: {  
        type: String,
    
    }
});

 
const CampPlace = mongoose.model("CampPlace", motorSchema);

module.exports = CampPlace;