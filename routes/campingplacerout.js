const express = require('express');

const { AddNewMotor,
      GetAllMotorData,
     EditMotor,
     DeleteMotor,
     DeleteAllMotors
     } = require("../controller/campplacecont");
     
const campplacerouter = express.Router();




campplacerouter.post('/api/camp-place', AddNewMotor);
campplacerouter.get('/api/camp-place', GetAllMotorData);
campplacerouter.put('/api/camp-place/:name', EditMotor);
campplacerouter.delete('/api/camp-place/:name' , DeleteMotor);
campplacerouter.delete('/all-delete', DeleteAllMotors)

module.exports = campplacerouter;