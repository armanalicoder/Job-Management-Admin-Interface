const mongoose = require("mongoose");

let JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    minsalary: {
      type: Number,
      required: true,
    },
    maxsalary: {
      type: Number,
      required: true,
    },
    selectedDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = JobSchema;
