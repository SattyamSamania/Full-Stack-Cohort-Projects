const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());



const userRouter = require('./routes/user');


const dbconnection = require("./db");

app.get("/", async (req, res) => {
  return res.send("<h1> You are on home route </h1>");
});

// app.use("/api/v1", mainRouter);
app.use('/user', userRouter);



const PORT = 9000;
app.listen(PORT, () => {
  dbconnection();
  console.log(`Server is Running on http://localhost:${PORT}`);
});
