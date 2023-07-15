const mongoose = require("mongoose");

const weekSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  totalHours: { type: Number, required: true },
  totalMinutes: { type: Number, required: true },
  activities: [{ type: mongoose.Schema.Types.ObjectId, ref: "Activity" }],
});

module.exports = mongoose.model("Week", weekSchema);
