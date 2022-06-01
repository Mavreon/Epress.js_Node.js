const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.listen("3000", ()=>{
    console.log("Local host at port 3000 started");
});

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=>{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    res.send("The summation of both values is " + (num1 + num2));
});

app.get("/bmicalculator", (req, res)=>{
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", (req, res)=>{
    var num1 = Number(req.body.weight);
    var num2 = Number(req.body.height);
    res.send("<p><b>Your BMI value is " + (num1/(num2**2)) + "</b></p>");
});