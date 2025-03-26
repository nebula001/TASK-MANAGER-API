const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");

const getTasks = asyncWrapper(async (req, res) => {
  const allTasks = await Task.find();
  return res.status(200).json({ success: true, msg: "Get All Task", allTasks });
});

const getTaskById = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const singleTask = await Task.findById(taskId);
  if (!singleTask) {
    return res
      .status(400)
      .json({ success: true, msg: `No task with id of ${taskId} available` });
  }
  return res
    .status(200)
    .json({ success: true, msg: "Get Single Task", singleTask });
});

const createTask = asyncWrapper(async (req, res) => {
  const { name, completed = false } = req.body;
  const newTask = await Task.create({ name, completed });
  return res
    .status(201)
    .json({ success: true, msg: "Create new Task", newTask });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const newTask = await Task.findByIdAndUpdate(taskId, req.body, {
    runValidators: true,
    new: true,
  });
  if (!newTask) {
    return res
      .status(400)
      .json({ success: true, msg: `No task with id of ${taskId} available` });
  }
  return res.status(201).json({ success: true, msg: "Update Task", newTask });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const deletedTask = await Task.findByIdAndDelete(taskId);
  if (!deletedTask) {
    return res
      .status(400)
      .json({
        success: true,
        msg: `No task with id of ${taskId} available to delete`,
      });
  }
  return res
    .status(200)
    .json({ success: true, msg: "Delete Task", deletedTask });
});

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };
