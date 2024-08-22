const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function authMiddleware(req, res, next) {
    //auth logic
    const token = req.headers.authorization;

    try {
        const tokenBearer = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;
        const decodedValue = jwt.verify(tokenBearer, JWT_SECRET);
        if (decodedValue.email) {
            req.email = decodedValue.email;
            next();
        } else {
            res.status(401).json({
                message: "Unauthorized"
            });
        }
    } catch (err) {
        res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports = authMiddleware;