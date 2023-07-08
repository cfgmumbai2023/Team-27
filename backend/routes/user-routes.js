const {addUser, login, getUser, addCreator} = require("../controller/user-controller.js")

const express = require("express");

const router = express.Router();

router.post("/adduser", addUser);
router.post("/login",login);
router.get("/getUser", getUser);
router.post("/addCreator", addCreator);


module.exports = router;