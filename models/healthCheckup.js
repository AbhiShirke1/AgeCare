const mongoose = require('mongoose');

const health = new mongoose.Schema({
    email: {
        type: String,
    },

    date:{
        type: String
    },

    hospital:{
        type: String
    }
})

const Healthcheckup = new mongoose.model("Health", health)

module.exports = Healthcheckup;