const { Router } = require("express");
const router = Router();

router.get("/posts", (req, res) => {
    //all posts view
});


router.get("/posts/:id", (req, res) => {
    //specific/single post view
});

router.get("/news", (req, res) => {
    //all news view
});

module.exports = router;