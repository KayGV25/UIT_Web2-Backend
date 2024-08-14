const jwt = require("jsonwebtoken");

const authMiddleware = {
    verifyUser: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            jwt.verify(token, process.env.JWT_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json("Invalid token.");
                }
                req.user = user;
                next();
            });
        }
        else {
            return res.status(401).json("Unauthenticated.");
        }
    }, 
    verifyAdmin: (req, res, next) => {
        authMiddleware.verifyUser (req, res, () => {
            if (req.user.isAdmin) {
                next();
            }
            else {
                return res.status(403).json("You don't have the permission to do this.");
            }
        });
    }
}

module.exports = authMiddleware;