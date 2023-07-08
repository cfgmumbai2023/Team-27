const mongoose=require ('mongoose');
const express=require('express');
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
mongoose.connect("mongodb+srv://"+process.env.MONGO_DB_USERNAME+":"+process.env.MONGO_DB_PASSWORD+"m7x74jVP8NzE4xfI@cluster0.0rwrfrq.mongodb.net/team27",{ useNewUrlParser : true}).then(() => {
    app.listen(5000, function () {
        console.log("Server Started On Port 5000");
      });
}).catch((err) => {console.log(err)})
    
