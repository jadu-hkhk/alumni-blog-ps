const mongoose = require("mongoose");
const { mongo_url } = require("../config");

mongoose.connect(mongo_url);

const Alumni = require("./models/alumniModel");
const Content = require("./models/contentModel");

module.exports = {
    Alumni,
    Content
}