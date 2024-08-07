const User = require("../models/User");
const bcrypt = require("bcryptjs");

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

            const password = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!password) {
                return res.status(401).json("Wrong password.");
            }
            res.status(200).json(user);
        }
        catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = authController;