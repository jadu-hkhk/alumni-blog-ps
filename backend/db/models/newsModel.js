const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    //news schema
})

const News = new mongoose.Schema('News', newsSchema);

module.exports = News;