// const User = require("../models/auth.models");
const uuid = require("uuid");
const User = require("../models/auth.models");


const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({
        success: false,
        message: "This user's email already exists!",
      });
    }

    // Create a new user
    const user = await User.create({
      name,
      email,
      password,
      uid: uuid.v4(),
    });

    // Generate token for the new user
    // const usersToken = await user.generateToken();

    res.status(201).json({
      success: true,
      id: user._id,
      name: user.name,
      email: user.email,
      // token: usersToken,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    ////email check
    const user = await User.findOne({email});

    if(!user){
        return res.status(404).json({
            success: false,
            message: "Invalid credentials!"
        })
    }

  /////match password
     const isMatch = await user.matchPassword(password)
     if(!isMatch){
        return res.status(404).json({
            success: false,
            message: "Invalid credentials! PAss"
        })
     }

    // Generate token for the new user
    const usersToken = await user.generateToken();

     res.status(200).json({
        success: true,
        id: user._id,
        email: user.email,
        token: usersToken,
        
     })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { register, login};
