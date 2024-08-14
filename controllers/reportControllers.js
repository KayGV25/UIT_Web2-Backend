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
            const reportedRecipe = await Report.findOne({recipeId: recipeId});
            if (reportedRecipe) {
                let usersReported = reportedRecipe.reportedBy;
                const findUser = usersReported.includes(userId)
                if(findUser != "null" && !findUser){
                    usersReported.push(userId);
                    const updated = await Report.findByIdAndUpdate(reportedRecipe._id, 
                        {
                            timesReported: reportedRecipe.timesReported + 1, 
                            reportedBy: usersReported
                        })
                    return res.status(200).json(updated)
                } 
                else {
                    return res.status(403).json("You cannot report again.");
                } 
            }
            else {
                const reportedRecipe = new Report({ recipeId: recipeId, reportBy: [userId] });
                await reportedRecipe.save();
                return res.status(200).json(reportedRecipe);
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    deleteOne: async(req, res) => {
        try {
        
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = reportController;