const express = require("express");
const ejs = require("ejs");
const app = express();
app.use(express.urlencoded({extented: true}));
app.use(express.json())
app.set("view engine", "ejs");
app.use(express.static('public'));


app.get("/", function (req, res){
    res.render("index");
})
app.listen("3000", function (){
    console.log("Server running on port 3000");
})