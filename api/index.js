
import express from "express";
const app = express();


app.use((req,res,next)=>{
    console.log("ada request masuk");
    next();
});

app.get("/api/salam", (req,res)=>{
        res.send("assalamualaikum");
});

app.listen(3000, ()=>{
    console.log("server telah berjalan");
});