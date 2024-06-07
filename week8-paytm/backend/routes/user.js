const zod = require("zod");
const express = require("express");
const { User } = require("../model/userModel");
const jwt = require("jsonwebtoken");

const routeRouter = express.Router();

const signupBody = zod.object({
  userName: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string().min(6),
});

// Route for Signup

routeRouter.post("/signup", async (req, res) => {
  console.log("object");
  // const {success } = signupBody.safeParse(req.body);

  // if(!success){
  //     return res.status(400).json({error: "Invalid data"});
  // }

  const existingUser = await User.findOne({
    userName: req.body.userName,
  });

  console.log(existingUser);

  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const newUser = new User({
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });

  const savedUser = await newUser.save();

  const userId = User._id;

  const token = jwt.sign(
    {
      _id: newUser._id,
      userName: req.body.userName,
      firstName: req.body.userName,
    },
    process.env.JWT_SECRET_KEY
  );

  res.status(201).send({
    message: "User created successfully",
    token,
    savedUser,
  });
});

// Route for Login

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string().min(6),
});

routeRouter.post("/signin", async (req, res) => {
  // const {success} = signinBody.safeParse(req.body);

  // if(!success){
  //     return res.status(400).json({error: "Invalid data"});
  // }

  const existingUser2 = await User.findOne({
    password: req.body.password,
  });

  if (!existingUser2) {
    return res.status(400).json({
      message: "user Not found",
    });
  }

  console.log(req.header("token"));

  const decodedData = jwt.verify(
    req.header("token"),
    process.env.JWT_SECRET_KEY
  );


  

  return res.status(200).send({
    decodedData,
  });
});

module.exports = routeRouter;
