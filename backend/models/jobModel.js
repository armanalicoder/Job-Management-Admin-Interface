const mongoose = require("mongoose");
const JobSchema = require("../schemas/JobSchema");

const Job = new mongoose.model("Job",JobSchema);

module.exports = Job;