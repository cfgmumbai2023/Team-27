const User = require("../model/user-model");
//const mongoose = require ("mongoose");
const bcrypt = require("bcrypt");

 const addUser = async (req, res, next) => {
    const { type, name, email, password, classes, age, school, contactnumber, address, uidse, language} = req.body;
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
      language
    });
  
    try {
      await Users.save();
    } catch (err) {
      return console.log(err);
    }
    return res.status(201).json({ Users });
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
    if (password != existingUser.password) {
      return res.status(400).json({ message: "Incorrect Password" });
    }
    return res
      .status(200)
      .json({ message: "Login Successfull", user: existingUser });
  };
  

  exports.addUser = addUser
  exports.login = login

   