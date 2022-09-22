// import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');


const HashPassword = async (password) =>{
    const hashedPW = await bcrypt.hash(password,10);
    return console.log('hashed PW :',hashedPW)
}

module.exports = HashPassword