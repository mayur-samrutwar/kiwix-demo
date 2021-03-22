const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.urlencoded({extented: true}));
app.use(express.json())
app.set("view engine", "ejs");
app.use(express.static('public'));


app.get("/", function (req, res){
    res.render("index");
})
app.listen(PORT, function (){
    console.log("Server running on port ${PORT}");
})