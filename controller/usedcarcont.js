const { response } = require("express");
const UsedCar = require("../models/usedcar-rout")


const AddNewMotor = (req, res) =>{
    try {
        const {name , age} = req.body;

        const newMotor = new UsedCar({name, age});
        newMotor.save();
        console.log(`Add new motor: ${name}, age: ${age}`);
        res.status(201).json({message: "Data reseived", newMotor});
    } catch (error) {
        res.status(404).json({message: `Error adding UsedCar`, error})
    }
    

};

const getAlldata = async (req,res) =>{
    try {
        const motor = await UsedCar.find();
        res.status(200).json(motors)
    } catch (error) {
        res.status(404).json({message: `Error fetching`, error})

    }
    
};

const EditMotor = async (req,res) =>{
    try {
        const {name ,age } = req.params;
        const {newName, newAge} = req.body;
        const motorName = await UsedCar.findOne({name})
        if(motorName){
            motorName.name = newName || motorName.name;
            motorName.age = newAge || motorName.age;
            await motor.save();
    
            console.log(`Edited name ${name}, to new name ${motorName.name}, new age: ${motorName.age}`);
            res.status(200).json({message: `Update data`, motorName});
    
        }
        else{
            res.status(404).json({message: `UsedCar note FOund`})
        }
    } catch (error) {
        res.status(404).json({message: `UsedCar note editing`,error})
    }
   
    
    };
   


const DeleteMotor = async (req,res) =>{
    try {
        const {name}  = req.params;
        const motor = await UsedCar.findOneAndDelete({name});
       
        if(motor) {
         
            console.log(`Deleted data ${name}`);
            res.status(200).json({message: `Deleted motor data`, motor});
        }
        else{
            res.status(404).json({message: `UsedCar note delete`})
        }
    } catch (error) {
        res.status(404).json({message: `UsedCar note deleted`,error})
    }
    };
  
    

const DeleteAll = async (req, res) => {
    try {
        await UsedCar.deleteMany();
        console.log("All motor data deleted");
        res.status(200).json({ message: "All data cleared" });
        
    } catch (error) {
        res.status(404).json({message:'problem'})
        
    }
 
};



module.exports = {
    AddNewMotor,
    getAlldata ,
     EditMotor, 
     DeleteMotor,
     DeleteAll
    };