const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");
const recipeRouter = require("./routes/recipe")

dotenv.config();
const app = express();

(async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected");
})();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/", authRouter);
app.use("/", recipeRouter);

app.listen(process.env.PORT, () => {
    console.clear();
    console.log(`Running at ${process.env.LOCAL_HOST}`);
});