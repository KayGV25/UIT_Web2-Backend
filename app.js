const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
dotenv.config();

const recipesRouter = require('./routes/recipes');
const usersRouter = require('./routes/users');

const PORT = process.env.PORT;
const MONGODB_KEY = process.env.MONGODB_KEY;
const LOCAL_HOST = process.env.LOCAL_HOST;

mongoose.set("strictQuery", false);
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(MONGODB_KEY);
    console.log("MongoDB Connected");
}

app.use(express.json());
app.use(cors());
app.use('/', recipesRouter);
app.use('/', usersRouter);

app.listen(PORT, () => {
    console.clear();
    console.log(`Starting server on port ${PORT}`);
    console.log(`${LOCAL_HOST}`);
});