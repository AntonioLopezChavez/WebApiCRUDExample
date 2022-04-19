const TasksService = require ('../services/entregables.js');

module.exports = {
    getAllTasks :  async (req, res, next) => {
        try{
            const tasks = await TasksService.getAllTasks();
            res.status(200).json({tasks})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los entregables. Err: ${err}`});
        }  
    },

    getTask :  async (req, res, next) => {
        try{
            const id = req.params.id
            const task = await TasksService.getTask(id);
            res.status(200).json({task})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los entregables. Err: ${err}`});
        }  
    },

    addTask :  async (req, res, next) => {
        try{
            const task = await TasksService.addTask(req.body);
            res.status(200).json({task})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los entregables. Err: ${err}`});
        }  
    },

    updateTask :  async (req, res, next) => {
        try{
            
            const id = req.params.id
            const task = await TasksService.updateTask(id, req.body);
            res.status(200).json({task})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los entregables. Err: ${err}`});
        }  
    },

    deleteTask :  async (req, res, next) => {
        try{
            const id = req.params.id
            const task = await TasksService.deleteTask(id);
            res.status(200).json({task})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los entregables. Err: ${err}`});
        }  
    }

};