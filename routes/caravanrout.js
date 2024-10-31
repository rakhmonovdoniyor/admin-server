const express = require('express');

const { AddNewMotor,
      GetAllMotorData,
     EditMotor,
     DeleteMotor,
     DeleteAllMotors
     } = require("../controller/caravancont");
     
const caravanRouter = express.Router();




caravanRouter.post('/api/caravan', AddNewMotor);
caravanRouter.get('/api/caravan', GetAllMotorData);
caravanRouter.put('/api/caravan/:name', EditMotor);
caravanRouter.delete('/api/caravan/:name' , DeleteMotor);
caravanRouter.delete('/all-delete', DeleteAllMotors)

module.exports = caravanRouter;