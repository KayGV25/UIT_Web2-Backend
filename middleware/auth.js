const jwt = require("jsonwebtoken");

const authMiddleware = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            jwt.verify(token, process.env.JWT_KEY, (err, user) => {
                if (err) {
                    return res.status(401).json("Invalid token.");
                }
                next();
            });
        }
        else {
            return res.status(401).json("Unauthenticated.");
        }
    }
}

module.exports = authMiddleware;