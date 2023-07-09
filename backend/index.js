const mongoose=require ('mongoose');
const express=require('express');
const bodyParser = require("body-parser");
require("dotenv").config();
const Post=require('./routes/postRoutes');

const userRoute=require('./routes/user-routes');

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
console.log("mongodb+srv://"+process.env.MONGO_DB_USERNAME+":"+process.env.MONGO_DB_PASSWORD+"@cluster0.0rwrfrq.mongodb.net/team27")
mongoose.connect("mongodb+srv://"+process.env.MONGO_DB_USERNAME+":"+process.env.MONGO_DB_PASSWORD+"@cluster0.0rwrfrq.mongodb.net/team27",{ useNewUrlParser : true}).then(() => {
const posts=require('../backend/model/PostModel');
app.post('/api/posts', async (req, res) => {
    try {
      const { title, url, summary, tags,classes } = req.body;
      const user = new posts({ title, url, summary, tags,classes });
    //   console.log(title);
      await user.save();
      const obj={ message: 'Query Submitted' };
      res.send(JSON.stringify(obj));
    //   console.log(title);
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      res.status(500).send({ error: 'Error saving the post' });
    }
  });

  app.get("/contentuserback", (req, res) => {
    posts.find().exec()
      .then((val) => {
        // console.log("Posts found:", val);
        res.send(val);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  });
app.listen(5000, function () {
        console.log("Server Started On Port 5000");
      });
}).catch((err) => {console.log(err)})