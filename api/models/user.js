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
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  profile: profileSchema,
},
{
  timestamps: true,
});

userSchema.methods.encryptPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = model("User", userSchema);
