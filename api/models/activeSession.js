import { Schema, model } from "mongoose";

const ActiveSessionSchema = new Schema({
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
  paymentStatus: {
    type: String,
    required: true,
  },
  payment: {
    type: Schema.Types.ObjectId,
    ref: "Payment",
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

module.exports = model("CancelledSession", ActiveSessionSchema);
