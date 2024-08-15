const { Router } = require("express");
const authMiddleware = require("../middleware/auth");
const router = Router();

router.post("/signup", (req, res) => {
    //alumni signup
});

router.post("/signin", (req, res) => {
    //alumni signin
});

router.post("/publish", authMiddleware, (req, res) => {
    //blog section publish logic
});

router.get("/posts", (req, res) => {
    //all posts view
});

router.get("/posts/:id", (req, res) => {
    //specific/single post view
});

router.delete("/posts/:id", authMiddleware, (req, res) => {
    //specific/single post delete
});

router.get("/news", (req, res) => {
    //all news view
});

module.exports = router;

//optional: usermanegement(update/ view profile)