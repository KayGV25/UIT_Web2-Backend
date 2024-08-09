const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
        name: { 
            type: String, 
            required: true
        },
        ingredients: { 
            type: String, 
            required: true
        },
        instructions: { 
            type: String, 
            required: true
        },
        author: { 
            type: String, 
            required: true
        },
        author_id: {
            type: String, 
            required: true
        },
        time: { 
            type: String, 
            required: true
        },
        tags: { 
            type: String, 
            required: true
        },
        image: { 
            type: String, 
            required: true
        },
        timesFavorite: {
            type: Number,
            default: 0
        }
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);