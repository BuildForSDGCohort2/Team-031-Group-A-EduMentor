import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  courseId: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  courseName: {
    type: String,
    required: true,
  },
  requests: [{
    type: Schema.Types.ObjectId,
    ref: "request",
  }],
  mentors: [{
    type: Schema.Types.ObjectId,
    ref: "Mentor",
  }],
  mentees: [{
    type: Schema.Types.ObjectId,
    ref: "Mentee",
  }],
},
{
  timestamps: true,
});

module.exports = model("Course", courseSchema);
