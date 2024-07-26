const express = require("express");
const JWT_SECRET = require("../config");
const User = require("../model/userModel");
const router = express.Router();
const zod = require("zod");
const { authMiddleware } = require("../middleware");
const jwt = require("jsonwebtoken");

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(6),
  firstName: zod.string().min(3),
  lastName: zod.string().min(3),
});
// signup function

router.post("/signup", async (req, res) => {
  try {
    const body = req.body;
    const { success } = signupSchema.safeParse(body);

    if (!success) {
      return res.status(400).json({
        message: "Invalid Input values",
      });
    }

    const user = await User.findOne({
      username: body.username,
    });

    console.log("user:", user);

    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
      console.log("User already exists");
    }

    // const newUser = await User.create({

    //     username: req.body.username,
    //     password: req.body.password,
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName
    // });

    const newUser = new User({
      username: req.body.username,
      password: req.body.password, // bcrypt.hashsyn(req.body.password, 10)
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    const userDocId = newUser._id;

    const token = jwt.sign(
      {
        userDocId,
      },
      process.env.JWT_SECRET
    );

    const savedUser = await newUser.save();

    return res.status(201).json({
      message: "User created successfully",
      data: savedUser,
      token,
    });
  } catch (err) {
    console.log("user signup", err.name, err.message);
    return res.status(400).json({
      message: "Something went wrong!",
    });
  }
});

// signin function

const signinSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(6),
});

router.post("/signin", async (req, res) => {
  try {
    const { success } = signinSchema.safeParse(req.body);

    if (!success) {
      res.json("Invalid inputs");
    }

    const userExist = await User.findOne({
      username: req.body.username,
    });
    if (!userExist) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (!user) {
      return res.status(400).json({
        message: "Error while logged In / User not found",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET
    );

    // let decodedData = jwt.verify(
    //   token,
    //   "sattyamsecretkey23",
    //   (err, decodes) => {
    //     if (err) return res.status(200).json({ message: "ghj" });
    //   }
    // );

    return res.status(200).json({
      message: "User Logged in successfully",
      data: user,
      token,
    });
  } catch (err) {
    console.log("user signin", err.name, err.message);

    return res.status(400).json({
      message: "Something went wrong!",
    });
  }
});

// update function
const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  let updatedUser = await User.findByIdAndUpdate(
    { _id: req.userId },
    req.body,
    { new: true }
  );

  res.json({
    message: "Updated successfully",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
