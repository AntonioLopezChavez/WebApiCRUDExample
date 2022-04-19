const express = require('express');
const router = express.Router();

const TasksControllers = require('../controllers/entregables.js');

router.get('/', TasksControllers.getAllTasks);
router.get('/:id', TasksControllers.getTask);
router.put('/update/:id', TasksControllers.updateTask);
router.post('/add/', TasksControllers.addTask);
router.delete('/delete/:id', TasksControllers.deleteTask);

module.exports = router;