const Recipe = require("../models/Recipe");
const User = require("../models/User");

const favoriteController = {
    getAll: async(req, res) => {
        try {

        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    toggleFavorite: async(req, res) => {
        try {

        }
        catch (err) {
            res.status(500).json(err);
        }
    },
}

module.exports = favoriteController;