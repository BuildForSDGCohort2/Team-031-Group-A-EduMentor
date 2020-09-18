import { Schema, model } from "mongoose";

const CompletedSessionSchema = new Schema({
  mentor: {
    type: Schema.Types.ObjectId,
    ref: "Mentor",
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "completed",
  },
  mentee: {
    type: Schema.Types.ObjectId,
    ref: "Mentee",
    required: true,
  },
  payment: {
    type: Schema.Types.ObjectId,
    ref: "Payment",
  },
  paymentStatus: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Mentee",
  },
},
{
  timestamps: true,
});

module.exports = model("CompletedSession", CompletedSessionSchema);
