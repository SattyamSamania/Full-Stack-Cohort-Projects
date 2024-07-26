const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const dbconnection = require("./db");


const mainRouter = require("./routes/index");

app.use(express.json());

app.use("/api/v1", mainRouter);
app.get("/", (req, res) => {
  res.send("Express App");
});
app.listen(5000, () => {
  dbconnection();
  console.log(`Server is running on port ${`http://localhost:5000/`}`);
});
