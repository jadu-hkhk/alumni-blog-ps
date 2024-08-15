const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    //article schema
})

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;