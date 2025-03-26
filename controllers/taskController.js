const Task = require("../models/task");

const getTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();
    return res
      .status(200)
      .json({ success: true, msg: "Get All Task", allTasks });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: "Something Went Wrong" });
  }
};

const getTaskById = async (req, res) => {
  try {
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
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: "Something Went Wrong" });
  }
};

const createTask = async (req, res) => {
  try {
    const { name, completed = false } = req.body;
    const newTask = await Task.create({ name, completed });
    return res
      .status(201)
      .json({ success: true, msg: "Create new Task", newTask });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: "Something Went Wrong" });
  }
};

const updateTask = async (req, res) => {
  return res.status(201).json({ success: true, msg: "Update Task" });
};

const deleteTask = async (req, res) => {
  return res.status(200).json({ success: true, msg: "Delete Task" });
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };
