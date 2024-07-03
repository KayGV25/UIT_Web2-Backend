var express = require('express');
var app = express();
var port = 443;
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_KEY = process.env.MONGODB_KEY;
const LOCAL_HOST = process.env.LOCAL_HOST;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Deploying on render.com");
});

app.listen(PORT, () => {
    console.clear();
    console.log(`Starting server on port ${PORT}`);
    console.log(`${LOCAL_HOST}`);
});