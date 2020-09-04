import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  profileImage: String,
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  courseOfStudy: {
    type: String,
  },
  institution: {
    type: String,
    trim: true,
  },
  socials: [String],
  payments: [String],
});

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  registeredOn: {
    type: Date,
    default: Date.now(),
  },
  userType: {
    type: String,
    default: "user",
    required: true,
  },
  profile: profileSchema,
},
{
  timestamps: true,
});

// eslint-disable-next-line func-names
userSchema.methods.encryptPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

// eslint-disable-next-line func-names
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = model("User", userSchema);
