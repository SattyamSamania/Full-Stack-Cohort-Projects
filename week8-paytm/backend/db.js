const mongoose = require('mongoose');
require('dotenv').config();

// database connection
const dbconnection = async () =>
  mongoose
    .connect(process.env.mongoURL)
    .then(() => {
      console.log("App Connected to Database");

    })
    .catch((error) => {
      console.log(error, "eeeeee", error.name, error.message)
    });



   
module.exports =  dbconnection;