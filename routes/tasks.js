const express = require('express');
const router = express.Router()
const {  getAllTasks,
    creatTasks,
    getTask,
    updateTask,
    deleteTask,}= require("../controllers/tasks")

router.route('/').get(getAllTasks).post(creatTasks)

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router;