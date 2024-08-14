const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authController = {
    registerUser: async(req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            const newUser = await new User({
                username: req.body.username,
                password: hashed
            });

            await newUser.save();
            res.status(201).json(newUser);
        }
        catch(err) {
            res.status(500).json(err);
        }
    },
    loginUser: async(req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res.status(404).json("User not found.");
            }

            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                return res.status(401).json("Wrong password.");
            }

            const { password, ...other } = user._doc;
            const token = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin
                },
                process.env.JWT_KEY,
                { expiresIn: "3h" }
            );
            res.status(200).json({ ...other, token });
        }
        catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = authController;