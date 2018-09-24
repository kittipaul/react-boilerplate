const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema(
  {
    goal: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Goal', GoalSchema);
