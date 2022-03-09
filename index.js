console.log("hello");
const express=require("express");
const  mongoose = require("mongoose");
const CreateUser=require('./routes/routes')
mongoose.connect("mongodb://localhost:27017/sign") 
const cors=require('cors')
let app=express();
app.use(cors())
app.use(express.json());


app.use('/',CreateUser)


app.listen(3000,()=>{
    console.log("run Port")
});