const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extented: true}));
app.use(express.json())
app.set("view engine", "ejs");
app.use(express.static('public'));


app.get("/", function (req, res){
    res.render("index");
})

app.get("/wikipedia_lt_all_mini_2021-02", function (req, res){
    res.render("demo")
})
app.listen(PORT, function (){
    console.log("Server running on port ${PORT}");
})