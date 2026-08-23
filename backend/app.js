import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();


const uri = process.env.MONGODB_URI;
const conntedDB = async()=>{
    try {
        await mongoose.connect(uri);
        console.log("DB connected successfully")
    } catch (error) {
        console.log(error)
    }
}
conntedDB();

app.get('/',(req,res)=>{
    res.send("hello world")
});


app.listen(process.env.PORT,()=>{
    console.log("server is running...",process.env.PORT);
});