const User = require("../model/user-model");
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
  
  const getUser = async (req, res, net)=>{
     try{
        const getAllUser = await User.find({});
        return res.status(200).json(getAllUser);
     } catch(error){
        console.log(error);
     }
  }

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
  
  /*const getCreator = async (req, res, net)=>{
    try{
       const getAllCreator = await User.find({});
       return res.status(200).json(getAllCreator);
    } catch(error){
       console.log(error);
    }
 }*/


  exports.addUser = addUser
  exports.login = login
  exports.getUser = getUser
  exports.addCreator = addCreator
  //exports.getCreator = getCreator



   