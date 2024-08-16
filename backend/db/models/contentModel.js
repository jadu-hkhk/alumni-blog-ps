const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    //content schema
    type: {
        type: String,
        required: true,
        enum: ["blog", "news"]
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Alumni'
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;