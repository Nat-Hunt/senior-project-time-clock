const mongoose = require("mongoose");

const weekSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  totalHours: { type: Number, required: true },
  totalMinutes: { type: Number, required: true },
  activities: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      numHours: { type: Number, required: true },
      numMinutes: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Week", weekSchema);
