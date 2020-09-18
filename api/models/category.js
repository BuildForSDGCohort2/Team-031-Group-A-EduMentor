import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  categoryId: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  requests: [{
    type: Schema.Types.ObjectId,
    ref: "Request",
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

module.exports = model("Category", categorySchema);
