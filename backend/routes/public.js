const { Router } = require("express");
const { Content, Alumni } = require("../db/index");
const router = Router();

router.get("/blog", async (req, res) => {
    //all blog view
    const blogs = await Content.find({
        type: "blog"
    })
    res.json({
        blogs: blogs
    })

});

router.get("/content/:contentId", async (req, res) => {
    //specific/single content view
    const contentId = req.params.contentId;

    const content = await Content.findOne({
        _id: contentId
    })

    if (content) {
        res.json({
            content: content,
        })
    }
    else {
        res.status(404).json({
            message: "content not found"
        })
    }
});

router.get("/news", async (req, res) => {
    //all news view
    const news = await Content.find({
        type: "news"
    })
    res.json({
        news: news
    })
});

module.exports = router;