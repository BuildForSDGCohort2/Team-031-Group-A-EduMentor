import { Schema, model } from "mongoose";

const requestSchema = new Schema({
  requestedBy: {
    type: Schema.Types.ObjectId,
    ref: "Mentee",
    required: true,
  },
  requestType: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  requestDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  completedDate: {
    type: Date,
  },
},
{
  timestamps: true,
});

module.exports = model("Request", requestSchema);
