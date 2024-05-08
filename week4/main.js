const express = require("express");

const app = express();

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "sattyam" || password != "pass") {
    res.status(400).json({
      status: "error",
      message: "Something wrong with the request",
    });
    return 
  }

    if (kidneyId != 1 && kidneyId != 2) {
      res.json({
        status: "error",
        message: "Something wrong with the Input Validation",
      });
      return 
    }
  

  return res.json({
    status: "success",
    message: "Your Kidney is fine",
  })
});

app.get('/', (req, res) => {
  res.send('Hello Express app!')
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
