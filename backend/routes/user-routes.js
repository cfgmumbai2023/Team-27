// const {addUser, login, getUser, addCreator, updateUser} = require("../controller/user-controller.js")
const {addUser, login, getUser, addCreator,updateUser,deleteUser} = require("../Controller/user-controller.js")

const express = require("express");

const router = express.Router();

router.post("/adduser", addUser);
router.post("/login",login);
router.get("/getUser", getUser);
router.post("/addCreator", addCreator);
// router.put("/:id", updateUser);
router.put("/updateUser/:id",updateUser);
router.delete("/deleteUser/:id",deleteUser);

module.exports = router;