const express = require('express');
const router = express.Router();
const recipe_db = require('../models/recipe');

router.post('/recipe', async (req, res) => {
    try {
        const recipe = new recipe_db(req.body);
        await recipe.save();
        res.status(201);
    }
    catch (error) {
        res.status(400);
    }
});

router.get('/recipes', async (req, res) => {
    try {
        const recipes = await recipe_db.find();
        res.status(200).json(recipes);
    } 
    catch (error) {
        res.status(500);
    }
});

router.get('/recipe/:id', async (req, res) => {
    try {
        const recipe = await recipe_db.findById(req.params.id);
        if (!recipe) {
            return res.status(404);
        }
        res.status(200).json(recipe);
    }
    catch (error) {
        res.status(500);
    }
});

module.exports = router;