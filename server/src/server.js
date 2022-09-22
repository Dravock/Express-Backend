const express = require('express');
const cors = require('cors');
const apiRouter = require('../routes')
const GetUuidV4 = require('../components/GetUuidV4.js');
const HashPassword = require('../components/HashPassword.js');


// const hashedPW  = await  HashPassword('Test Password')
// const userId    =   GetUuidV4()

// Server Daten
const currentdate = new Date();
const app = express();

// Variablen für die Server umgebung
// app.use(cors());
app.use(express.json());



app.use('/api/chirps',apiRouter)

// app.post('/testlink',(req, res)=>{
//     const { destructure } = req.body
// })


app.listen(3001, ()=>{
    var datetime = "Last Sync: "
                                + currentdate.getHours()    + ":"  
                                + currentdate.getMinutes()  + ":" 
                                + currentdate.getSeconds();
    console.log(datetime,'=> server is running on Port 3001')
})