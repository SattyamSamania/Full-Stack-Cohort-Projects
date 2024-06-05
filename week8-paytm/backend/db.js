const mongoose = require("mongoose");

// database connection
const dbconnection = async () =>
  mongoose
    .connect(process.env.mongoURL)
    .then(() => {
      console.log("App Connected to Database");
    })
    .catch((error) => {
      console.log(error);
    });


module.exports = dbconnection;
