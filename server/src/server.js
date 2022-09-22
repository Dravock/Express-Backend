const express = require('express');
const cors = require('cors');
const apiRouter = require('../routes')
const GetUuidV4 = require('../components/GetUuidV4.js');


// Server Daten
const currentdate = new Date();
const app = express();
app.use(cors());
app.use(express.json());

// Variablen für die Server umgebung
    // const userId    = GetUuidV4()


// Einträge in die DB
app.use('/api/link',apiRouter)
// app.use('/api/user',apiRouter)



app.listen(3001, async ()=>{
    var datetime = "Last Sync: "
                                + currentdate.getHours()    + ":"  
                                + currentdate.getMinutes()  + ":" 
                                + currentdate.getSeconds();
    console.log(datetime,'=> server is running on Port 3001')
})