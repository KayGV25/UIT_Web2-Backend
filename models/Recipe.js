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
        isReported: {
            type: Boolean,
            required: true
        },
        favorites: {
            type: Number,
            required: true,
            default: 0
        }
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);