const mysql = require('mysql');


const pool = mysql.createPool({
    connectionLimit: 10,  
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: '',
    database: process.env.DB_BD
  
}); 

pool.getConnection((err,connection)=> {
    if(err)
    throw err;
    console.log('Base de Datos conectada exitosamente');
    connection.release();
  });


const querypromise = (sql) => {
    return new Promise( (resolve, reject) => {
        pool.query(sql, (error, elements) =>{
            if (error){
                return reject(error)
            }
            return resolve(elements)
        })
    })
}

module.exports = {
    pool,
    querypromise
}