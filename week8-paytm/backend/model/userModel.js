const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      // lowercase: true,
      minLength: 3,
      maxLength: 30,
    },

    firstName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };
