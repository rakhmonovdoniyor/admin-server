 const express = require("express");
const {
    AddNewMotor,
    GetAllMotorData,
    EditMotor,
    DeleteMotor,
    DeleteAllMotors,
} = require("../controller/motorcontrol");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/api/data",protect, AddNewMotor);
router.get("/api/data", GetAllMotorData);
router.put("/api/data/:name",protect, EditMotor);
router.delete("/api/data/:name",protect, DeleteMotor);
router.delete("/deleteAll",protect, DeleteAllMotors);

module.exports = router;