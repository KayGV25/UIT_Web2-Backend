const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
name: { type: String, required: true },
});

module.exports = mongoose.model("Recipe", RecipeSchema);