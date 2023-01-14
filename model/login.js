const mongoose = require("mongoose")
const alish = mongoose.Schema;
const darshan = new alish({
    loginEmail: {
        type: String
    },
    loginPassword: {
        type: String
    }
})

module.exports = mongoose.model("logindata", darshan)