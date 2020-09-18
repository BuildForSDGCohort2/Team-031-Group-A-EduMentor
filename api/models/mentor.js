import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import profileSchema from "./schemas/profileSchema";

const mentorSchema = new Schema({
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
  mentees: [{
    type: Schema.Types.ObjectId,
    ref: "Mentee",
  }],
  profile: profileSchema,
},
{
  timestamps: true,
});

// eslint-disable-next-line func-names
mentorSchema.methods.encryptPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

// eslint-disable-next-line func-names
mentorSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = model("Mentor", mentorSchema);
