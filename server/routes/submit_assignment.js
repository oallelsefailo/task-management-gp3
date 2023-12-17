const express = require("express");
const router = express.Router();
const assignmentSchema = require("../models/assignmentSchema");

// POST task
router.post("/", async (req, res) => {
  try {
    const { assignment, assignee, taskId, checked } = req.body;
    const taskData = {
      assignment,
      assignee,
      taskId,
      checked,
    };
    const newTask = new assignmentSchema.Assignment(taskData);
    await newTask.save();

    res.status(201).json({ message: "Task Posted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

// PUT task
router.put("/by-id", async (req, res) => {
  try {
    const { _id, checked, assignee, assignment } = req.body;
    const payload = {
      _id,
      checked,
      assignee,
      assignment,
    };
    const newTask = await assignmentSchema.Assignment.findByIdAndUpdate(
      _id, 
      payload,
      {returnOriginal: false}
      );

    res.status(201).json({ message: "Task Updated", newTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

// GET task
router.get("/", async (req, res) => {
  try {
    const task = await assignmentSchema.Assignment.find();
    res.status(200).json(assignment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

// GET task by ID
router.get("/by-taskId/:taskId", async (req, res) => {
  try {
    const taskId = req.params.taskId;
    console.log("taskId", taskId);
    const task = await assignmentSchema.Assignment.find({ taskId }).exec();
    console.log("task", task);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    console.log("taskId", taskId);
    const task = await assignmentSchema.Assignment.findById(taskId);
    console.log("task", task);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(assignment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

//DELETE task
router.delete("/delete/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    await assignmentSchema.Assignment.findOneAndDelete({ _id: taskId });
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting" });
  }
});

module.exports = router;
