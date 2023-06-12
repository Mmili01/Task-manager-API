const Task = require("../models/task");
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllTasks = asyncWrapper(async (req, res) => {
  const task = await Task.find({});
  res.status(200).json({ task });

  //   res.send("all items from the file");
});
const creatTasks = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    // const error = new Error ("NOt found")
    // error.status(404)
    // return next(error)
    return res.status(404).json({ msg: "task does not exist" });
  }
  res.status(200).json({ task });

  res.send("get Task");
});
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      res.status(404).json({ msg: "are you playing" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }

  res.send("aupdate task");
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: "are you playing" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTasks,
  creatTasks,
  getTask,
  updateTask,
  deleteTask,
};
