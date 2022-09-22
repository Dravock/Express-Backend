const mysql = require('mysql');
require('dotenv').config()

// Settings
const dbTable=process.env.User
let db ={};

const conn = mysql.createPool({
    connectionLimit:process.env.CONN_LIMIT,
    password:process.env.PASSWORD,
    user: process.env.USER_NAME,
    host: process.env.HOST_NAME,
    database:process.env.DB_NAME,
    port:process.env.PORT
})

// SQL QUERY STATEMENTS 
db.all = () => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${dbTable}`, (err,results)=>{
            if(err){
                return reject(err);
            }
            console.log(' => Get erfolgreich')
            return resolve(results)
        });
    });
};

db.one = (id) => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${dbTable} WHERE id=?`,[id] ,(err,results)=>{
            if(err){
                return reject(err);
            }
            console.log(' => Get erfolgreich')
            return resolve(results)
        });
    });
};

db.post  =  (obj) => {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO ${dbTable} (vorname,nachname,email,passwort) VALUES( ?, ?, ?, ? )`,[obj.vorname,obj.nachname,obj.email,obj.hashedPW],(err,results)=>{
            if(err){
                return reject(err);
            }
            console.log(' => POST REQUEST ERFOLGREICH ')
            console.log('      =>',obj)
            return resolve(results[0])
        });
    });
};

module.exports = db ;