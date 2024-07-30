const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth");

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

app.listen(process.env.PORT, () => {
    console.clear();
    console.log(`Running at ${process.env.LOCAL_HOST}`);
});