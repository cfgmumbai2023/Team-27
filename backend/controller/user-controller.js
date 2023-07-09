const User = require("../Model/user-model");
//const mongoose = require ("mongoose");
const bcrypt = require("bcrypt");

 const addUser = async (req, res, next) => {
    const { type, name, email, password, classes, age, school, contactnumber, address, uidse, language1, language2, isAccepted} = req.body;
    let existingUser;
    try {
      existingUser = await User.findOne({ email: email });
    } catch (err) {
      return console.log(err);
    }
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User Already Exists! Login Instead" });
    }
    //const hashedPassword = await bcrypt.hash({password});
  
    const Users = new User({
      type,
      name,
      email,
      password,
      classes, 
      age, 
      school, 
      contactnumber, 
      address, 
      uidse, 
      language1,
      language2,
      isAccepted : false,
    });
  
    try {
      await Users.save();
    } catch (err) {
      return console.log(err);
    }
    return res.status(201).json({ Users });
  };

  
  const addCreator = async (req, res, next) => {
    const { type, name, email, password, age, contactnumber, address} = req.body;

    let existingCreator;
    try {
      existingCreator = await User.findOne({ email: email });
    } catch (err) {
      return console.log(err);
    }
    if (existingCreator) {
      return res
        .status(400)
        .json({ message: "User Already Exists! Login Instead" });
    }
    //const hashedPassword = await bcrypt.hash({password});
  
    const Users = new User({
      type,
      name,
      email,
      password,
      age, 
      contactnumber, 
      address
    });
  
    try {
      await Users.save();
    } catch (err) {
      return console.log(err);
    }
    return res.status(201).json({ Users });
  };
  
//retrieving all the users from the database
 const getUser = async (req, res, next) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const updateUser = async (req, res) => {
  console.log(userId);
  try {
    const user = await User.findById(userId);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isAccepted = true; // Update the isAccepted field to true
    await user.save();

    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const deleteUser = (req, res) => {
  const userId = req.params.id;
  User.findByIdAndRemove(userId)
    .then(() => {
      console.log("User deleted:", userId);
      // Handle successful deletion if needed
      res.status(200).json({ message: "User deleted successfully" });
    })
    .catch(error => {
      console.log(error);
      // Handle error if needed
      res.status(500).json({ message: "Internal server error" });
    });
};
const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "Couldnt Find User By This Email" });
  }

  //const isPasswordCorrect = Boolean.compare(password, existingUser.password);
  if (password != existingUser.password || !existingUser.isAccepted) {
    return res.status(400).json({ message: "Authentication Failed!" });
  }
  return res
    .status(200)
    .json({ message: "Login Successfull", user: existingUser });
};



module.exports = { addUser, login, getUser, addCreator,updateUser, deleteUser};


 



   
