const dbService = require('../config/db.js');

const getAllTasks =  () => {

    sql = 'SELECT * FROM entregable'
    
    return dbService.querypromise(sql)

}

const getTask =  (id) => {

    sql = `SELECT * 
            FROM entregable
            WHERE IdEntregable = ${id}`
    
    return dbService.querypromise(sql)

}

const addTask =  (body) => {

    const {IdEntregable, Tipo, Titulo} = body

    sql = ` INSERT INTO entregable(IdEntregable, Tipo, Titulo) 
            VALUES(${IdEntregable}, '${Tipo}', '${Titulo}')`
    
    return dbService.querypromise(sql)

}

const updateTask =  (id, body) => {

    const {Tipo, Titulo} = body

    sql = ` UPDATE entregable
                SET Tipo =  '${Tipo}',
                    Titulo = '${Titulo}'
            WHERE IdEntregable = ${id}
            `
    
    return dbService.querypromise(sql)

}

const deleteTask =  (id) => {

    sql = `DELETE FROM entregable
            WHERE IdEntregable = ${id}
            `
    
    return dbService.querypromise(sql)

}


module.exports = {
    getAllTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask
}