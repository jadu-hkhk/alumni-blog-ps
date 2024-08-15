const mongoose = require("mongoose");
const { mongo_url } = require("../config");

mongoose.connect(mongo_url);

const Alumni = require("./models/alumniModel");
const Article = require("./models/articleModel");
const News = require("../models/newsModel");

module.exports = {
    Alumni,
    Article,
    News
}