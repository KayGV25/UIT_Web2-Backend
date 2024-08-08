const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
        recipeId: { 
            type: String, 
            required: true, 
            unique: true
        },
        reportedBy: {
            type: [String],
            required: true
        },
        timesReported: {
            type: Number,
            default: 1
        }
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);