const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  assignment: { type: String, required: true },
  assignee: { type: String },
  taskId: { type: mongoose.Schema.Types.ObjectId },
  checked: { type: Boolean },
});

const Assignment = mongoose.model("Assignment", assignmentSchema, "assignment");

const myAssignmentSchemas = { Assignment: Assignment };

module.exports = myAssignmentSchemas;