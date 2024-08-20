const { Router } = require("express");
const authMiddleware = require("../middleware/auth");
const router = Router();
const { Alumni, Content } = require("../db/index");
const zod = require("zod");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const emailSchema = zod.string().email().refine(email => email.endsWith('@iiti.ac.in'),
    { message: "email should end with @iiti.ac.in" }
);

const passwordSchema = zod.string().min(8, { message: "password must contain atleast 8 letters" }).refine(password =>
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%&*?]/.test(password)
    , { message: "password must contain at least one lowercase letter, one uppercase letter, one number, one special character" }
);

router.post("/signup", async (req, res) => {
    //alumni signup
    const email = req.body.email;
    const password = req.body.password;

    try {
        emailSchema.parse(email);
        passwordSchema.parse(password);
    } catch (e) {
        return res.status(400).json({
            message: e.errors.map(err => err.message).join(', ')
        })
    }

    const user = await Alumni.findOne({
        email
    })

    if (user) {
        res.status(409).json({
            message: "User already exists"
        })
    }
    else {
        await Alumni.create({
            email: email,
            password: password
        })
        res.status(201).json({
            message: "User created succesfully"
        });
    }
});

router.post("/signin", async (req, res) => {
    //alumni signin
    const email = req.body.email;
    const password = req.body.password;

    const user = await Alumni.findOne({
        email: email,
        password: password
    })

    if (user) {
        const token = jwt.sign({ email }, JWT_SECRET);
        res.json({ token })
    } else {
        res.status(401).send({
            message: "Incorrect email or password"
        })
    }
});

router.post("/publish", authMiddleware, async (req, res) => {
    //blog section publish logic
    const title = req.body.title;
    const description = req.body.description;
    const email = req.email;
    const type = req.body.type;
    const user = await Alumni.findOne({
        email
    })

    const author = user._id;

    await Content.create({
        title,
        description,
        author,
        type
    })

    res.status(201).json({
        message: "Content created successfully"
    })
});

router.delete("/content/:contentId", authMiddleware, async (req, res) => {
    //specific/single content delete
    const contentId = req.params.contentId;
    const author = req.email;

    const content = await Content.findOne({
        _id: contentId
    })

    if (content.author.toString() != author) {
        return res.status(403).json({ message: "you are not authorized to delete the following content" });
    }

    if (content) {
        await Content.deleteOne({
            _id: contentId
        })
    }
    else {
        res.status(404).json({
            message: "content not found"
        })
    }
});


module.exports = router;
