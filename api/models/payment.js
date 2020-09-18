import { Schema, model } from "mongoose";

const paymentSchema = new Schema({
  paidBy: {
    type: Schema.Types.ObjectId,
    ref: "Mentee",
    required: true,
  },
  receivedBy: {
    type: Schema.Types.ObjectId,
    ref: "Mentor",
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  completedDate: {
    type: Date,
  },
},
{
  timestamps: true,
});

module.exports = model("Payment", paymentSchema);
