const express = require('express');

const { AddNewMotor,
      GetAllMotorData,
     EditMotor,
     DeleteMotor,
     DeleteAllMotors
     } = require("../controller/tuningcont");
     
const tuningrouter = express.Router();




tuningrouter.post('/api/tuning', AddNewMotor);
tuningrouter.get('/api/tuning', GetAllMotorData);
tuningrouter.put('/api/tuning/:name', EditMotor);
tuningrouter.delete('/api/tuning/:name' , DeleteMotor);
tuningrouter.delete('/all-delete', DeleteAllMotors)

module.exports = tuningrouter;