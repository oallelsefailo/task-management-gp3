const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    photo: { type: String },
    name: { type: String, required: true },
});

const Task = mongoose.model("Task", taskSchema, "task");

const mySchemas = {Task: Task}

module.exports = mySchemas;
