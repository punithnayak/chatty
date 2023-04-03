const mongoose = require("mongoose");

const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/messenger";

const databaseConnect = () => {
  mongoose
    .connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongodb Database Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = databaseConnect;
