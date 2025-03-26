const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTaskById).patch(updateTask).delete(deleteTask);

module.exports = router;
