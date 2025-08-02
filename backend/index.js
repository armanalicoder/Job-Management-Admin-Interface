const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Job = require("./models/jobModel");
require('dotenv').config()

app.listen(port,()=>{
    console.log("app is listening on port 8000");
})


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
  origin: 'https://cybermindworksjobupdates.onrender.com',
  methods: ['GET', 'POST', 'PUT','PATCH','DELETE'],
  credentials: true
}));

const DB_URL = process.env.MONGO_URL;
console.log(DB_URL)
main().then(()=>{
    console.log("Connection Succesfull")
}).catch((e)=>{
    console.log("DB Connection Failed",e);
})


async function main() {
    await mongoose.connect(DB_URL)
}


app.get("/",(req,res)=>{
    res.redirect("https://cybermindworksjobupdates.onrender.com");
})

app.get("/jobs",async(req,res)=>{
    const data = await Job.find({});
    res.json(data);
})

app.post("/add",async(req,res)=>{
    const savedData = await new Job(req.body.data);
    savedData.save();
    res.json("Done")
})