const {addUser, login, getUser, addCreator, updateUser} = require("../controller/user-controller.js")

const express = require("express");

const router = express.Router();

router.post("/adduser", addUser);
router.post("/login",login);
router.get("/getUser", getUser);
router.post("/addCreator", addCreator);
router.put("/:id", updateUser);


module.exports = router;