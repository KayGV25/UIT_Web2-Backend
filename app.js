const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected");
    }
    catch(err) {
        console.log(err);
    }
})();


app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/", authRouter);

app.listen(process.env.PORT, () => {
    console.clear();
    console.log(`Running at ${process.env.LOCAL_HOST}`);
});