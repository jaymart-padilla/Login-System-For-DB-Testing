import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const AuthSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
    minlength: 3,
    maxlength: 50,
  },

  email: {
    type: String,
    required: [true, "Please provide an email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: [true, "Password can't be empty"],
    trim: true,
    minlength: 6,
    maxlength: 64,
  },

  // TODO: make a pre method to have a function of checking
  // if both passwords are identical
  // passwordConfirm: {
  //   type: String,
  //   required: [true, "Please provide a password"],
  //   trim: true,
  //   minlength: 6,
  // },
});

// hash password
AuthSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

// generates JWT upon registering (data needs to be waited synchronously)
AuthSchema.methods.generateJWT = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// validate password
AuthSchema.methods.validatePassword = async function (passwordCandidate) {
  const isPasswordValidated = await bcrypt.compare(
    passwordCandidate,
    this.password
  );
  return isPasswordValidated;
};

export const Auth = mongoose.model("User Auth", AuthSchema);
