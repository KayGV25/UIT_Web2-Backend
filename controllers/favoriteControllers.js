const User = require("../models/User");
const Recipe = require("../models/Recipe");

const favoriteController = {
    getAll: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            const favoriteRecipes = await Recipe.find({'_id' : { $in: user.favorite }}); 
            return res.status(200).json(favoriteRecipes);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    toggleFavorite: async(req, res) => {
        const { recipeId, userId } = req.body;
        let count;
        try {
            const user = await User.findById(userId);
            const recipe = await Recipe.findById(recipeId);
            let favoriteRecipes = user.favorite;
            if (favoriteRecipes.includes(recipeId)) {
                favoriteRecipes = favoriteRecipes.filter((ele) => ele !== recipeId);
                count = -1;
            }
            else {
                favoriteRecipes.push(recipeId);
                count = 1;
            }
            await Recipe.findByIdAndUpdate(recipe._id, {timesFavorite: (recipe.timesFavorite + count)});
            await User.findByIdAndUpdate(user._id, {favorite: favoriteRecipes});
            res.status(200).json(count);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = favoriteController;