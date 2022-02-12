const mongoose = require("../db/connection");

const dailyLogSchema = new mongoose.Schema({
  date: {type: String, required: true},
  outdoorTemp: { type: String},
  visitOutside: { type: Boolean },
  diet: { type: String },
  exercise: { type: String },
  potentialSymptoms: { type: String },
  //^make an array of symptoms?
  img: { type: String },
  location: { type: String },
});

const DailyLog = mongoose.model("DailyLog", dailyLogSchema);

module.exports = DailyLog;
