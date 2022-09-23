//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ 
  extended: true
}));
  
  mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

  const userSchema = ({
    email: String,
    password: String
  });

  const User = new mongoose.model("User", userSchema);

  
  app.get("/", function(req, res){
    res.sendFile(__dirname + '/login.html');
  });
  

  app.get("/login", function(req, res){
    res.sendFile(__dirname + '/login.html');
  });
  

  app.get("/register", function(req, res){
    res.sendFile(__dirname + '/register.html');
  });
  

  app.post("/register", function(req, res){
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      const newUser =  new User({
        email: req.body.username,
        password: hash
      });
      newUser.save(function(err){
        if (err) {
          console.log(err);
        } else {
          res.sendFile(__dirname + '/index.html');
        }
      });
    });
  });
  
  app.post("/login", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
  
    User.findOne({email: username}, function(err, foundUser){
      if (err) {
        console.log(err);
      } else {
        if (foundUser) {
          bcrypt.compare(password, foundUser.password, function(err, result) {
            if (result === true) {
              res.sendFile(__dirname + '/index.html');
            }
          });
        }
      }
    });
  });
  
  app.post("/logout",function(req,res){
    res.sendFile(__dirname + '/login.html');
  });

  app.post("/signup",function(req,res){
    res.sendFile(__dirname + '/register.html');
  });

  app.post("/subscribe",function(req,res){
    const newUser =  new User({
      email: req.body.email,
      
    });
    newUser.save(function(err){
      if (err) {
        console.log(err);
      } else {
       
        res.sendFile(__dirname + '/200ok.html');
      }
    });
   
  });

  app.post("/email",function(req,res){
    res.sendFile(__dirname + '/index.html');
  });

  app.post("/loginReg",function(req,res){
    res.sendFile(__dirname + '/register.html');
  });



app.listen(3000, function() {
    console.log("Server started on port 3000.");
  });
  