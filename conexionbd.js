//importo el modulo de mysql
const mysql2 = require('mysql2');
const {promisify} = require('util');
const {database} = require('./keys');

const pool = mysql2.createPool(database);

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('La conexion con la base de datos fue cerrada');
        }
        if(err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene demasiadas conexiones');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('La conexion a la base de datos fue rechazada');
        }
    }
    if (connection)connection.release();
    console.log('La Base de Datos esta conectada');
    return;
})

pool.query = promisify(pool.query);

module.exports = pool;