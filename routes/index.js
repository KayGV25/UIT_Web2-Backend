const express = require('express');
const router = express.Router();
const user_db = require('../models/user');
const recipe_db = require('../models/recipe');

router.get('/', (req, res) => {
    res.send("Deploying on render.com");
});

module.exports = router;