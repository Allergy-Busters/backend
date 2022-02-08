const mongoose = require("../db/connection");

const dailyLogSchema = new mongoose.Schema({
  outdoorTemp: { type: String, default: '0 ℉' },
  visitOutside: { type: Boolean, default: false },
  diet: { type: String },
  exercise: { type: String },
  potentialSymptoms: { type: String },
  //^make an array of symptoms?
  img: { type: String },
  location: { type: String },
});

const dailyLog = mongoose.model("dailyLog", dailyLogSchema);

module.exports = DailyLog;
