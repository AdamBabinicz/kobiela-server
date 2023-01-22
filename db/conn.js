const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((err) => {
    console.log(err);
  });

// username: Adam
// password: crqAMtPFdwg4bYq6
