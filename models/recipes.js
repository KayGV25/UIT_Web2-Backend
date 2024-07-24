const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
name: { type: String, required: true },
ingredients: { type: String, required: true },
instructions: { type: String, required: true },
author: { type: String, required: true },
time: { type: String, required: true },
tags: { type: String, required: true },
image: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Recipes", RecipeSchema);