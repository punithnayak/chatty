const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;

const databaseConnect = require("./config/database");
const authRouter = require("./routes/authRouter");
dotenv.config({
    path: "backend/config/config.env",
});

app.get("/", (req, res) => {
    res.send("Sex nahi mil raha");
});

databaseConnect();

app.use("/api/messenger",authRouter)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
