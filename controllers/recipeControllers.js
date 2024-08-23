const Recipe = require("../models/Recipe");

const recipeController = {
    getAll: async(req, res) => {
        try {
            const recipes = await Recipe.find();
            if (recipes.length === 0) {
                return res.status(204).json([]);
            }
            res.status(200).json(recipes);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    getOne: async(req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id);
            res.status(200).json(recipe);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    getMany: async(req, res) => {
        try {
            const { name, tags, ingredients, author } = req.query;
            let query = {};

            if (name) {
                query.name = new RegExp(name, 'i');
            }
            if (tags) {
                const tagsPattern = tags
                    .split(',')
                    .map(tag => tag.trim())
                    .map(tag => `${tag}`)
                    .join('|');
                query.tags = new RegExp(tagsPattern, 'i');
            }
            if (ingredients) {
                const ingredientsPattern = ingredients
                    .split(',')
                    .map(ingredient => ingredient.trim())
                    .map(ingredient => `${ingredient}`)
                    .join('|');
                query.ingredients = new RegExp(ingredientsPattern, 'i');            
            }
            if (author) {
                query.author = new RegExp(author, 'i');
            }

            const recipes = await Recipe.find(query);
            if (recipes.length === 0) {
                return res.status(204).json();
            }
            res.status(200).json(recipes);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    createOne: async(req, res) => {
        try {
            const recipe = new Recipe(req.body);
            await recipe.save();
            res.status(201).json(recipe);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    deleteOne: async(req, res) => {
        try {
            const recipe = await Recipe.findByIdAndDelete(req.params.id);
            if (!recipe) {
                return res.status(204).json();
            }
            res.status(200).json("Recipe deleted.");
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}
module.exports = recipeController;