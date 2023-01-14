const express = require("express")
const path = require('path');
const mongoose = require('mongoose')
const mainRouter = require("./route/index")
const app = express()

app.set("view engine", "ejs")
app.set("views", "view")
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb://localhost/cmsPractise", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(ap => {
    console.log("Databse connect")
}).catch(err => {
    console.log("database not connect")
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(mainRouter);
app.listen(5000, () => {
    console.log("server Running")
})