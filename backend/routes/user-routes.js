const {addUser, login, getUser} = require("../controller/user-controller.js")

const express = require("express");

const router = express.Router();

router.post("/adduser", addUser);
router.post("/login",login);
router.get("/getUser", getUser);


module.exports = router;