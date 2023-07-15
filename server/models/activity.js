const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  numHours: { type: Number, required: true },
  numMinutes: { type: Number, required: true },
});

module.exports = mongoose.model("Activity", activitySchema);
