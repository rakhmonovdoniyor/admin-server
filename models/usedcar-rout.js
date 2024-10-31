const mongoose = require("mongoose");

const motorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
       

    },
    age:{
        type: Number,
        required: true,
    }
});

const UsedCar = mongoose.model("UsedCar", motorSchema);

module.exports= UsedCar;