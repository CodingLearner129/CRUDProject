const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/test";
const port = 9000;

const app =  express();

// Get Connetion Using mongoose
mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

// Start Connection
con.on("open", ()=>{
    console.log("Connected....");
})

// To use json file
app.use(express.json());

// For route to the config file
const testRouter = require("./routes/config");
app.use("/config", testRouter);

// Listen port to Start Server
app.listen(port, ()=>{
    console.log("Server started...");
})