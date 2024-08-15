const Report = require("../models/Report");

const reportController = {
    getAll: async(req, res) => {
        try {
            const reportedRecipes = await Report.find();
            if (reportedRecipes.length === 0) {
                return res.status(404).json("No reported recipe found.");
            }
            res.status(200).json(reportedRecipes);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    reportOne: async(req, res) => {
        const {recipeId, userId} = req.body;
        try {
            const reportedRecipe = await Report.findOne({ recipeId: recipeId });
            if (reportedRecipe) {
                const reportedBy = reportedRecipe.reportedBy;
                if (!reportedBy.includes(userId)) {
                    reportedBy.push(userId);
                    reportedRecipe.timesReported += 1;

                    const updatedReports = await Report.findByIdAndUpdate(
                        reportedRecipe._id, 
                        {
                            timesReported: reportedRecipe.timesReported, 
                            reportedBy: reportedBy
                        }, { new: true }
                    );
                    return res.status(201).json(updatedReports);
                } 
                else {
                    return res.status(403).json("You cannot report again.");
                } 
            }
            else {
                const reportedRecipe = new Report({ recipeId: recipeId, reportedBy: [userId] });
                await reportedRecipe.save();
                return res.status(201).json(reportedRecipe);
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    deleteOne: async(req, res) => {
        try {
            const reportedRecipe = await Report.findOne({ recipeId: req.params.id });
            if (reportedRecipe) {
                await Report.findByIdAndDelete(reportedRecipe._id);
                res.status(200).json("Recipe deleted.");
            }
            else {
                res.status(204).json("No recipe found.");
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = reportController;