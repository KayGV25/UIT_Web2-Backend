const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Deploying on render.com");
});

module.exports = router;