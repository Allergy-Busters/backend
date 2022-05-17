const mongoose = require("../db/connection");

const dailyLogSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: {type: String, required: true},
  outdoorTemp: { type: String},
  visitOutside: { type: Boolean },
  diet: { type: String },
  exercise: { type: String },
  potentialSymptoms: { type: String },
  //^make an array of symptoms?
  img: {data: Buffer, contentType: String},
  location: { type: String },
  username: {
    type: String
  },
  // owner: {
  //   // References use the type ObjectId
  //   type: mongoose.Schema.Types.ObjectId,
  //   // the name of the model to which they refer
  //   ref: 'User'
  // } 
});

const DailyLog = mongoose.model("DailyLog", dailyLogSchema);

module.exports = DailyLog;
