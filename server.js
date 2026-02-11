const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/malikstore");

const User = require("./models/User");

app.post("/signup", async(req,res)=>{
    const hashed = await bcrypt.hash(req.body.password,10);
    const user = new User({email:req.body.email,password:hashed});
    await user.save();
    res.json("User Created");
});

app.listen(5000,()=>console.log("Server running"));
