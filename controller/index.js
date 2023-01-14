const bibhav = require("../model/register")
const manzil = require("../model/login")

exports.loginPage = (req, res, next) => {
    res.render("default/loginpage.ejs")
}
exports.registerpage = (req, res, next) => {
    res.render("default/register.ejs")
}
exports.indexpage = (req, res, next) => {
    res.render("default/index.ejs")
}
exports.registerdata = (req, res, next) => {
    console.log(req.body)
    bibhav.create({
        ...req.body
    }).then(data => {
        console.log("data Create")
    }).catch(err => {
        console.log(err)
    })
}

exports.logindata = (req, res, next) => {
    manzil.create({
        ...req.body
    })
}