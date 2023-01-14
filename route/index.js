const express = require("express")
const route = express.Router()
const mainController = require("../controller/index")


route.get('/', mainController.loginPage)
route.get('/register', mainController.registerpage)
route.get('/index', mainController.indexpage)
route.post('/registerdata', mainController.registerdata)


module.exports = route