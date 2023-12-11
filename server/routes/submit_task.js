const express = require("express");
const router = require("express").Router();
const schemas = require("../models/schemas");

// POST task
router.post("/", async (req, res) => {
  try {
    const { photo, name } = req.body;

    const taskData = {
      photo,
      name,
    };
    const newTask = new schemas.Task(taskData);
    await newTask.save();

    res.status(201).json({ message: "Task Posted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

// GET task
router.get("/", async (req, res) => {
  try {
    const tasks = await schemas.Task.find();
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

// GET task by ID
router.get("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await schemas.Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

//DELETE task
router.delete("/delete/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    await schemas.Task.findOneAndDelete({ _id: taskId });
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting" });
  }
});

module.exports = router;
