const mongoose = require("mongoose")
const alish = mongoose.Schema
const darshan = new alish({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    confirmpassword: {
        type: String
    }
})
module.exports = mongoose.model("registrationform", darshan)