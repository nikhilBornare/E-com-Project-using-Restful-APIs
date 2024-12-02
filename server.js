import express from "express";

const server = express();

server.get("/",(req,res) =>{
    res.send("Welcome to Ecommerce Apis");
});
server.listen(3200,() =>{
    console.log("Server is Running on 3200");
});