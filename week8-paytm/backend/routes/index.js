const express = require('express');
const router = express.Router();
const userRouter = require('./user');


router.get("/", (req, res) => {
  return res.send("<h1> You are on home route </h1>");
});


router.get('/user', userRouter);

module.exports = router;