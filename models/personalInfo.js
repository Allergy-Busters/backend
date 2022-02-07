const mongoose = require("../db/connection");

const userInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 0 },
  familyHistory: { type: String },
});

const userInfo = mongoose.model("userInfo", userInfoSchema);

module.exports = userInfo;
