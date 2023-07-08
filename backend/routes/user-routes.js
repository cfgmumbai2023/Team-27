const {addUser, login} = require("../controller/user-controller.js")

const express = require("express");

const router = express.Router();

router.post("/adduser", addUser);
router.post("/login",login)


module.exports = router;