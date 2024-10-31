const { response } = require("express");
const path = require('path');
const Caravan = require("../models/caravan-model");
const multer = require("multer")
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${Date.now()}${ext}`);
    }
});

const upload = multer({ storage });

 
const AddNewMotor = async (req, res) => {
    try {
        const { name,brand, cost, company, license, location, people, type, date } = req.body;
        const imagePath = req.file ? req.file.path : null; 

        const newMotor = new Caravan({name, brand, cost, company, license, location, people, type, date });
        await newMotor.save();

        console.log(`Add new data: ${name}, ${cost} `);
        res.status(201).json({ message: "Data received", newMotor });
    } catch (error) {
        res.status(400).json({ message: "Error adding motor", error });
    }
};

 
const GetAllMotorData = async (req, res) => {
    try {
        const motors = await Caravan.find();
        res.status(200).json(motors);
    } catch (error) {
        res.status(400).json({ message: "Error fetching motor", error });
    }
};

 
const EditMotor = async (req, res) => {
    try {
        const { name } = req.params;
        const { newName,newBrand, newCost, newCompany, newLicense, newLocation, newPeople, newType, newDate } = req.body;
        const motor = await Caravan.findOne({name});
        
        if (motor) {
            // motor.name = newName || motor.name;
            motor.name = newName ||  motor.name;
            motor.brand = newBrand || motor.brand;
            motor.cost = newCost || motor.cost;
            motor.company = newCompany || motor.company;
            motor.license = newLicense || motor.license;
            motor.location = newLocation || motor.location;
            motor.people = newPeople || motor.people;
            motor.type = newType || motor.type;
            motor.date = newDate || motor.date; 
             motor.save();
            
            console.log(`Edited name: ${name},Edited brand: ${brand}, to new brand: ${motor.brand}, new cost: ${motor.cost}, new company: ${motor.company}, new license: ${motor.license}, new location: ${motor.location}, new people : ${motor.people}, new date: ${motor.date}, new type: ${motor.type} `);
            res.status(200).json({ message: `Data updated`, motor });
        } else {
            res.status(404).json({ message: `Data not found` });
        }
        
    } catch (error) {
        res.status(400).json({ message: "Error editing motor", error });
    }
};

 
const DeleteMotor = async (req, res) => {
    try {
        const { name } = req.params;
        const motor = await Caravan.findOneAndDelete({name});

        if (motor) {
            console.log(`Deleted Data: ${name}`);
            res.status(200).json({ message: `Deleted Data`, motor });
        } else {
            res.status(404).json({ message: "Caravan not found" });
        }
        
    } catch (error) {
        res.status(400).json({ message: "Error deleting motor", error });
    }
};
 
const DeleteAllMotors = async (req, res) => {
    try {
        await Caravan.deleteMany();
        console.log(`Deleted all motor data`);
        res.status(200).json({ message: `All data deleted` });
    } catch (error) {
        res.status(400).json({ message: "Error deleting motors", error });
    }
};



module.exports = { AddNewMotor , GetAllMotorData, EditMotor, DeleteMotor, DeleteAllMotors };