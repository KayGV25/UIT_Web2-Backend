var express = require('express');
var app = express();
var port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Deploying on render.com");
});

app.listen(port, () => {
    console.clear();
    console.log("Starting server on port " + port);
    console.log("http://localhost:" + port);
});