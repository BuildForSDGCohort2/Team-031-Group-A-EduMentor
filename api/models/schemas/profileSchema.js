import { Schema } from "mongoose";

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  activeSession: {
    type: Schema.Types.ObjectId,
    ref: "Session",
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

export default profileSchema;
