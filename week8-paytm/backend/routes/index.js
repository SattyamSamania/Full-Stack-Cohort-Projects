const express = require("express");

const userRouter = require("./user.Routes");
const router = express.Router();

router.use("/user", userRouter);
router.get("/user", (req, res) => {
  res.send("User page");
});

module.exports = router;
