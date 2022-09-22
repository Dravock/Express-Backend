import bcrypt from 'bcrypt';

const HashPassword = async (password)=>{
    const hashedPW = await bcrypt.hash(password,10);
    return console.log('hashed PW :',hashedPW)
}

export default HashPassword;