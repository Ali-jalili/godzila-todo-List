const { Router } = require("express")

const { getAlltasks, addNewTasks, updateTask, deletTask } = require('../controller/taskcontoller')

const router = Router();

router.get('/', getAlltasks)

router.post('/', addNewTasks)

router.patch('/', updateTask)

router.delete('/', deletTask)

module.exports = router;
