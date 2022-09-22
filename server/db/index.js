const mysql = require('mysql');

const conn = mysql.createPool({
    connectionLimit:10,
    password:'',
    user: 'root',
    host: 'localhost',
    database:'test',
    port:'3306'

})

let chirpdb ={};

chirpdb.all = () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM user', (err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results)
        });
    });
};

module.exports = chirpdb;