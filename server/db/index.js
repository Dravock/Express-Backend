const mysql = require('mysql');
require('dotenv').config()

const conn = mysql.createPool({
    connectionLimit:process.env.CONN_LIMIT,
    password:process.env.PASSWORD,
    user: process.env.USER_NAME,
    host: process.env.HOST_NAME,
    database:process.env.DB_NAME,
    port:process.env.PORT
})


let db ={};

db.all = () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM user', (err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results)
        });
    });
};

module.exports = db ;