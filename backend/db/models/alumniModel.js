const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
    //alumni schema
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true

    }
})

const Alumni = mongoose.model('Alumni', alumniSchema);

module.exports = Alumni;