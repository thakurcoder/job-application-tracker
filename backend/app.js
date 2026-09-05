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

// db schema and model 
const jobSchema = new mongoose.Schema({
    company:{type:String,required:true},
    date:{type:Date},
    message:{type:String, required:true}
})

const Job = mongoose.model("Job",jobSchema);



app.get('/',(req,res)=>{
    res.send("hello world")
});

app.post('/api/test',async (req,res)=>{
    try {
        const data = req.body;
        const newJob = new Job({
            company:req.body.company,
            date:req.body.date,
            message:req.body.message
        })
        const saveData = await newJob.save();
        // const newJob = await Job.create(newJob);
        // console.log(saveData)
        res.status(201).json({"message":"entry created"})                            
        
    } catch (error) {
        console.log(error)
    }
})



app.get("/api/test", async (req,res)=>{
    const data = await Job.find()
    // console.log(data)
    res.send(data)
})

app.patch("/api/test/:id",async(req,res)=>{
    // console.log("req",req.params.id)
    // console.log("req body",req.body)
    try {
        const update = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.json(update)
    } catch (error) {
        console.log(error)
        res.send(500).json({message:"update failed"})
    }
})

app.delete("/api/test/:id",async (req,res)=>{
    console.log("delete req : - ",req.params.id)
    try {
        const del = await Job.deleteOne({_id:req.params.id})
        res.json(del)
    } catch (error) {
        console.log(error)
    }
})

app.listen(process.env.PORT,()=>{
    console.log("server is running...",process.env.PORT);
});