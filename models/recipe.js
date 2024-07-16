const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
recipe_id: { type: Number, required: true, unique: true },
name: { type: String, required: true },
ingredients: { type: String, required: true },
instructions: { type: String, required: true },
author: { type: String, required: true },
time: { type: Number, required: true },
tags: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Recipe", RecipeSchema);