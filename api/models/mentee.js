import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import profileSchema from "./schemas/profileSchema";

const menteeSchema = new Schema({
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
  requests: [{
    type: Schema.Types.ObjectId,
    ref: "Request",
  }],
  mentors: [{
    type: Schema.Types.ObjectId,
    ref: "Mentor",
  }],
  profile: profileSchema,
},
{
  timestamps: true,
});

// eslint-disable-next-line func-names
menteeSchema.methods.encryptPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

// eslint-disable-next-line func-names
menteeSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = model("Mentee", menteeSchema);
