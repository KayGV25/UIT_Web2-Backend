const Recipe = require("../models/Recipe");
const User = require("../models/User");

const favoriteController = {
    getAll: async(req, res) => {
        try {
            const user = await User.findById(req.body.userId);
            const recipeList = user.favorite;
            const favoriteRecipe = await Recipe.find({'_id' : { $in: recipeList}}); 
            return res.status(200).json(favoriteRecipe);
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
            const recipeList = user.favorite;
            if (recipeList.includes(recipeId)) {
                recipeList = recipeList.filter(function(recipe){
                    return recipe !== recipeId;
                });
                count = -1;
            }
            else {
                recipeList.push(recipeId);
                count = 1;
            }
            const resRecipe = await Recipe.findByIdAndUpdate(recipe._id, {timesFavorite: recipe.timesFavorite + count});
            const resUser = await User.findByIdAndUpdate(user._id, {favorite: recipeList});
            res.status(200).json("bruh");
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = favoriteController;