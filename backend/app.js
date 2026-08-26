import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());


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

app.post('/api/test',async (req,res)=>{
    try {
        const data = req.body;
        console.log(data)
        res.status(201).json({"message":"entry created"})                            
        
    } catch (error) {
        console.log(error)
    }
})

app.get("/api/test",(req,res)=>{
    const data = [
        { "id": 1, "item": "Laptop" },
        { "id": 2, "item": "Mouse" },
        { "id": 3, "item": "Keyboard" }
      ]
      
    res.send(data)
})

app.listen(process.env.PORT,()=>{
    console.log("server is running...",process.env.PORT);
});