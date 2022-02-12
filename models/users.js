const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true},
  allergyOrIntolerance: [{ type: String }],
  //^we can make an array of allergies or intolerances
});

const User = mongoose.model("User", userSchema);
module.exports = User;
